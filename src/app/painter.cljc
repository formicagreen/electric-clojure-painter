(ns app.painter

  ; trick shadow into ensuring that client/server always have the same version
  ; all .cljc files containing Electric code must have this line!
  #?(:cljs (:require-macros app.painter)) ; <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.api :as hf]
            [clojure.string :as str]
            [missionary.core :as m]))


(def cursor-emojis ["👁️" "👽" "🌝" "🌚" "💀" "🐝" "🌸" "🌼"])

(def canvas-size 5000)

#?(:clj (defonce !canvas-items (atom {})))

#?(:clj (def !users (atom {})))

#?(:cljs (def !current-path (atom nil)))

#?(:cljs (defonce !current-color (atom "lightblue")))

#?(:cljs (def !mouse-coords (atom [0 0])))

(e/def canvas-items (e/server (e/watch !canvas-items)))

(e/def current-color (e/server (e/watch !current-color)))

(e/def current-path (e/client (e/watch !current-path)))

(e/def mouse-coords (e/client (e/watch !mouse-coords)))

(e/def session-id (e/server (get-in hf/*http-request* [:headers "sec-websocket-key"])))

(e/defn mouse-touch-down [e] (reset! !current-path (rand-int 100000000)))

(e/defn mouse-touch-up [e] (reset! !current-path nil))

(e/defn mouse-touch-move [e]
  (let [x (or (.. e -clientX) (.. e -touches (item 0) -clientX))
        y (or (.. e -clientY) (.. e -touches (item 0) -clientY))]
    (reset! !mouse-coords [x y])
    (e/server
     (swap! !users assoc session-id [x y])
     (when-not (nil? current-path)
       (println "current-path" current-path)
       (swap! !canvas-items
              (fn [!c] (update !c current-path ;; create or conj to path
                               (fn [path] (assoc path
                                                 :color current-color
                                                 :points (conj (:points path) [x y]))))))))))
(e/defn Cursor [user]
  (dom/div
   (dom/style {:position "absolute"
               :left (str (- (first (second user)) 15) "px")
               :top (str (- (second (second user)) 15) "px")
               :z-index "2"
               :width "10px"
               :height "10px"
               :padding-bottom "10px"
               :pointer-events "none"})
   (dom/text (cursor-emojis (mod (hash (first user)) (count cursor-emojis))))))

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

   (dom/div
   ;; Color picker
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
        (dom/on "click" (e/fn [e] (e/server (reset! !current-color color)))))))
    ;; Delete button
    (Button. "🗑️" (e/fn [e]
                     (e/server
                      (e/for [[k v] canvas-items]
                        (swap! !canvas-items assoc k {}))))))


   ;; Render canvas
   ;; Remove old SVG if present (otherwise there will be duplicates when hot reloading)
   (when-let [old-svg (.getElementById js/document "svg")]
     (.remove old-svg))
   (let [svg (.createElementNS js/document "http://www.w3.org/2000/svg" "svg")]
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
     (e/for [[k v] canvas-items]
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
  (Cursor. [session-id mouse-coords])

  ;; Other user's cursors
  (e/for [user (e/server (e/watch !users))]
    (let [cursor-is-me (= session-id (first user))]
      (when-not cursor-is-me (Cursor. user))))

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