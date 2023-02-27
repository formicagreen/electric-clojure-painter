(ns app.painter

  ; trick shadow into ensuring that client/server always have the same version
  ; all .cljc files containing Electric code must have this line!
  #?(:cljs (:require-macros app.painter)) ; <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.api :as hf]
            [clojure.string :as str]
            [missionary.core :as m]))

#?(:clj (defonce !paths (atom {})))

#?(:clj (def !users (atom {})))

#?(:cljs (def !current-path (atom nil)))

#?(:cljs (defonce !current-color (atom "#0f172a")))

#?(:cljs (def !mouse-position (atom [nil nil])))

(e/def paths (e/server (e/watch !paths)))

(e/def current-color (e/client (e/watch !current-color)))

(e/def current-path (e/client (e/watch !current-path)))

(e/def mouse-position (e/client (e/watch !mouse-position)))

(e/def session-id (e/server (get-in hf/*http-request* [:headers "sec-websocket-key"])))

(e/defn mouse-touch-down [e] (reset! !current-path (rand-int 100000000)))

(e/defn mouse-touch-up [e] (reset! !current-path nil))

(e/defn mouse-touch-move [e]
  (let [x (or (.. e -clientX) (.. e -touches (item 0) -clientX))
        y (or (.. e -clientY) (.. e -touches (item 0) -clientY))]
    (reset! !mouse-position [x y])
    (e/server
     (swap! !users assoc session-id [x y])
     (when-not (nil? current-path)
       (swap! !paths
              (fn [!c] (update !c current-path ;; create or conj to path
                               (fn [path] (assoc path
                                                 :color current-color
                                                 :points (conj (:points path) [x y]))))))))))
(e/defn Cursor [id position]
  (when-not (nil? (first position))
    (dom/div
     (dom/style {:position "absolute"
                 :left (str (- (first position) 15) "px")
                 :top (str (- (second position) 15) "px")
                 :z-index "2"
                 :width "10px"
                 :height "10px"
                 :padding-bottom "10px"
                 :pointer-events "none"})
     (let [cursors ["👁️" "👽" "🌝" "🌚" "💀" "🐝" "🌸" "🌼"]
           index (mod (hash id) (count cursors))]
       (dom/text (nth cursors index))))))

(e/defn Button [text fn]
  (dom/div
   (dom/props {:class "hover"})
   (dom/on "click" fn)
   (dom/text text)))

(e/defn App []
  (dom/style {:background "lightyellow"
              :margin "0"
              :overflow "hidden"
              :user-select "none"
              :cursor "none"
              :font-family "sans-serif"
              :font-size "30px"
              :transition "background 0.5s ease"})

  ;; Global styles
  (dom/element "style"
               (dom/text "* { box-sizing: border-box; }
                          .hover { transition: all ease 0.1s; }
                          .hover:hover { transform: scale(1.2); }"))

  ;; Main div
  (dom/div
   (dom/style {:width "100vw"
               :height "100vh"})

   ;; Event listeners 
   (dom/on "mousedown" mouse-touch-down)
   (dom/on "mouseup" mouse-touch-up)
   (dom/on "mousemove" mouse-touch-move)
   (dom/on "touchstart" mouse-touch-down)
   (dom/on "touchend" mouse-touch-up)
   (dom/on "touchmove" mouse-touch-move)

   ;; Toolbar
   (dom/div
    (dom/style {:background "#fff5"
                :backdrop-filter "blur(10px)"
                :position "fixed"
                :z-index "1"
                :display "flex"
                :top "10px"
                :left "10px"
                :border-radius "10px"
                :box-shadow "0 0 5px rgba(0, 0, 0, 0.2)"
                :height "calc(100% - 20px)"
                :flex-direction "column"
                :justify-content "space-between"
                :padding "10px"})
   ;; Color picker
    (dom/div
     (e/for [color ["#0f172a" "#dc2626" "#ea580c"  "#fbbf24" "#a3e635" "#16a34a" "#0ea5e9" "#4f46e5" "#c026d3"]]
       (dom/div
        (dom/style {:border-radius "100px"
                    :border "1px solid #eeea"
                    :width "30px"
                    :height "30px"
                    :padding "10px"
                    :margin-bottom "10px"
                    :background color})
        (dom/props {:class "hover"})
        (dom/on "click" (e/fn [e] (reset! !current-color color))))))
    ;; Delete button
    (Button. "🗑️" (e/fn [e]
                     (e/server
                      (e/for [[k v] paths]
                        (swap! !paths assoc k {}))))))


   ;; Render canvas
   ;; Remove old SVG if present (otherwise there will be duplicates when hot reloading)
   (when-let [old-svg (.getElementById js/document "svg")]
     (.remove old-svg))
   (let [svg (.createElementNS js/document "http://www.w3.org/2000/svg" "svg")
         canvas-size 5000]
     (.setAttribute svg "viewBox" (str "0 0 " canvas-size " " canvas-size))
     (.setAttribute svg "width" (str canvas-size))
     (.setAttribute svg "height" (str canvas-size))
     (.setAttribute svg "id" "svg")
     (.setAttribute svg "style"
                    (str "position:fixed; 
                          top:0; 
                          left:0; 
                          pointer-events: none; 
                          width: " canvas-size "px;"
                         "height: " canvas-size "px;"))
     (e/for [[k v] paths]
       (let [old-path (.getElementById js/document k)
             d (->> (:points v)
                    (map (fn [[x y]] (str x "," y)))
                    (str/join " ")
                    (str "M"))]
         (if (nil? old-path)
           (let [path (.createElementNS js/document "http://www.w3.org/2000/svg" "path")]
             (.setAttribute path "id" "path")
             (.setAttribute path "fill" "none")
             (.setAttribute path "stroke" (:color v))
             (.setAttribute path "stroke-width" "5")
             (.setAttribute path "stroke-opacity" "0.7")
             (.setAttribute path "id" k)
             (.setAttribute path "d" d)
             (.appendChild svg path))
           (if (= d "M")
             (.remove old-path)
             (.setAttribute old-path "d" d)))))
     (.appendChild js/document.body svg)))
   

  ;; Own cursor
  (Cursor. [session-id mouse-position])

  ;; Other user's cursors
  (e/for [[id position] (e/server (e/watch !users))]
    (when-not (= session-id id) (Cursor. id position)))

  ;; Detect when user joins/leaves
  (e/server
            ; >x is a Missionary flow that attaches side effect to the mount/unmount lifecycle
   (let [>x (->> (m/observe (fn mount [!]
                              (swap! !users assoc session-id [nil nil])
                              (println `mount session-id @!users)
                              (fn unmount []
                                (swap! !users dissoc session-id)
                                (println `unmount session-id @!users))))
                 (m/reductions {} nil))]
              ; Missionary flows are booted with `new` (monadic join)
              ; This works because Electric is essentially a Clojure-to-Missionary compiler,
              ; so this actually typechecks from a compiler internals perspective.
     (new >x))))