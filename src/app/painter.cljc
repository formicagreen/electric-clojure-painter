(ns app.painter

  ; trick shadow into ensuring that client/server always have the same version
  ; all .cljc files containing Electric code must have this line!
  #?(:cljs (:require-macros app.painter)) ; <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.api :as hf]
            [clojure.string :as str]
            [missionary.core :as m]
            [hyperfiddle.electric-svg :as svg]))

#?(:clj (defonce !paths (atom [])))

#?(:clj (def !users (atom {})))

#?(:cljs (def !current-path (atom nil)))

#?(:cljs (defonce !current-color (atom "#0f172a")))

#?(:cljs (def !mouse-position (atom [nil nil])))

(e/def paths (e/server (e/watch !paths)))

(e/def current-color (e/client (e/watch !current-color)))

(e/def current-path (e/client (e/watch !current-path)))

(e/def mouse-position (e/client (e/watch !mouse-position)))

(e/def session-id (e/server (get-in hf/*http-request* [:headers "sec-websocket-key"])))

(e/defn mouse-touch-down [e]
  (let [path {:id (rand-int 100000000)
              :points [[(.. e -clientX) (.. e -clientY)]]
              :color current-color}]
    (reset! !current-path path) ; start new path on client
    (e/server (swap! !paths conj path)) ; add path to server
    ))

(e/defn mouse-touch-up [e] (reset! !current-path nil))

(e/defn mouse-touch-move [e]
  (let [x (or (.. e -clientX) (.. e -touches (item 0) -clientX)) ; mouse or touch
        y (or (.. e -clientY) (.. e -touches (item 0) -clientY))]
    (reset! !mouse-position [x y])
    (when current-path
      (swap! !current-path update :points conj [x y])
      (e/server
       (swap! !paths 
              (fn [paths] (map #(if (= (:id %) (:id current-path)) current-path %) paths)))))))

(e/defn Cursor [id position]
  (let [x (first position)
        y (second position)
        offset 15]
    (when (and x y)
    (dom/div
     (dom/style {:position "absolute"
                 :left (str (- x offset) "px")
                 :top (str (- y offset) "px")
                 :z-index "2"
                 :width "10px"
                 :height "10px"
                 :pointer-events "none"})
     (let [cursors ["👁️" "👽" "🌝" "🌚"
                    "🐝" "🌸" "🌼" "🌹"
                    "🌱" "🌀" "🐬" "🐚"]
           index (mod (hash id) (count cursors))]
       (dom/text (cursors index)))))))

(e/defn Path [path]
  (when (:points path)
   (let [path-data-svg (->> (:points path)
                           (map (fn [[x y]] (str x "," y)))
                           (str/join " ")
                           (str "M"))]
    (e/client
     (svg/path (dom/props {:d path-data-svg
                           :fill "none"
                           :stroke (:color path)
                           :stroke-width "5"
                           :stroke-opacity "0.7"}))))))

(comment
  @!paths
  (reset! !paths [{:color "#a3e635", :points [[201 372] [210 100]], :id 52522010}])
  (let [path {:color "#a3e635", :points [[201 372] [210 100] [300 500]], :id 52522010}]
    (swap! !paths map #(if (= (:id %) (:id path)) path %))
    ) 
  
  (update {:color "#a3e635", :points [[201 372] [210 100]], :id 52522010}  :points conj [100 100])
  )
(e/defn App []
  (dom/style {:background "lightyellow"
              :margin "0"
              :overflow "hidden"
              :user-select "none"
              :cursor "none"
              :font-size "30px"})

  ;; Global styles
  (dom/element "style"
               (dom/text "* { box-sizing: border-box; }
                          .hover { transition: all ease 0.1s; }
                          .hover:hover { transform: scale(1.2); }"))
  
  (dom/div
   (dom/style {:position "fixed"
               :background "white" 
               :z-index "2"
               :pointer-events "none"})
   (dom/text (str current-path)))

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
     (e/for [color ["#0f172a" "#dc2626" "#ea580c" "#fbbf24" "#a3e635" "#16a34a" "#0ea5e9" "#4f46e5" "#c026d3"]]
       (dom/div
        (dom/style {:border-radius "100px"
                    :border "1px solid #eeea"
                    :width "30px"
                    :height "30px"
                    :padding "10px"
                    :margin-bottom "10px"
                    :background color})
        (dom/props {:class "hover"})
        (dom/on "click"
                (e/fn [e] (reset! !current-color color))))))
    ;; Delete button
    (dom/div
     (dom/props {:class "hover"})
     (dom/on "click"
             (e/fn [e]
               (e/server
                (reset! !paths []))))
     (dom/text "🗑️")))


   ;; Paths
   (comment) 
   
   (let [canvas-size 5000]
               (svg/svg
                (dom/props {:viewBox (str "0 0 " canvas-size " " canvas-size)
                            :style {:position "fixed"
                                    :top "0"
                                    :left "0"
                                    :pointer-events "none"
                                    :width (str canvas-size "px")
                                    :height (str canvas-size "px")}})
                (e/server
                 (e/for-by :id [path (conj paths current-path)]
                           (Path. path)))))



  ;; Own cursor
   (Cursor. session-id mouse-position)
   )

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