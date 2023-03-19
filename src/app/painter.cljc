(ns app.painter

  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.api :as hf]
            [clojure.string :as str]
            [hyperfiddle.electric-svg :as svg]))

#?(:clj (defonce !paths (atom (sorted-map))))

#?(:clj (def !users (atom {})))

#?(:cljs (def !current-path-id (atom nil)))

#?(:cljs (defonce !current-color (atom "#0f172a")))

#?(:cljs (def !cursor-position (atom [nil nil])))

(e/def paths (e/server (e/watch !paths)))

(e/def users (e/server (e/watch !users)))

(e/def current-color (e/client (e/watch !current-color)))

(e/def current-path-id (e/client (e/watch !current-path-id)))

(e/def cursor-position (e/client (e/watch !cursor-position)))

(e/def session-id (e/server (get-in hf/*http-request* [:headers "sec-websocket-key"])))

(e/defn pointerdown [e]
  (let [x (.-clientX e)
        y (.-clientY e)
        id (.now js/Date)]
    (reset! !current-path-id id)
    (e/server
     (swap! !paths assoc id {:points [[x y]]
                             :color current-color}))))

(e/defn pointermove [e]
  (let [x (.-clientX e)
        y (.-clientY e)]
    (reset! !cursor-position [x y])
    (e/server
     (swap! !users assoc session-id [x y])
     (when current-path-id
       (swap! !paths update-in [current-path-id :points] conj [x y])))))

(e/defn pointerup [e] (reset! !current-path-id nil))

(e/defn Cursor [id [x y]]
  (when (and x y)
    (let [offset 15
          cursors ["👁️" "👽" "🌝" "🌚"
                   "🐝" "🌸" "🌼" "🌱"
                   "🧿" "🪲" "🌍" "🐬"]
          index (mod (hash id) (count cursors))]
      (dom/div
       (dom/style {:position "absolute"
                   :left (str (- x offset) "px")
                   :top (str (- y offset) "px")
                   :z-index "2"
                   :width "10px"
                   :height "10px"
                   :pointer-events "none"})
       (dom/text (cursors index))))))

(e/defn Path [{:keys [points color]}]
  (e/client 
   (svg/polyline
    (dom/props {:points (str/join " " (map #(str (first %) "," (second %)) points))
                ; Convert [[x1 y1] [x2 y2] ...] to "x1,y1 x2,y2 ..."
                :stroke color
                :fill "none"
                :stroke-width "5"
                :stroke-linecap "round"
                :stroke-linejoin "round"
                :opacity "0.9"}))))

(e/defn Canvas []
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
      (e/for-by key [[k v] paths]
                (Path. v))))))

(e/defn Toolbar []
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
   ; Color picker
   (dom/div
    (e/for [color ["#0f172a" "#dc2626" "#ea580c" 
                   "#fbbf24" "#a3e635" "#16a34a" 
                   "#0ea5e9" "#4f46e5" "#c026d3"]]
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
    ; Delete button
   (dom/div
    (dom/props {:class "hover"})
    (dom/on "click"
            (e/fn [e]
              (e/server
               (reset! !paths (sorted-map)))))
    (dom/text "🗑️"))))

(e/defn Debugger [x]
  (dom/div 
   (dom/style {:background "white"
               :position "fixed"
               :pointer-events "none"
               :top "0"
               :left "0"
               :opacity "0.8"
               :z-index "2"})
   (dom/text (str x))))

(e/defn App []
  ; Global styles
  (dom/style {:background "lightyellow"
              :margin "0"
              :overflow "hidden"
              :user-select "none"
              :cursor "none"
              :touch-action "none" ; needed for pointer move on mobile
              :font-size "30px"})
  (dom/element "style"
               (dom/text "* { box-sizing: border-box; }
                          .hover { transition: all ease 0.1s; }
                          .hover:hover { transform: scale(1.2); }"))
  ; Main div
  (dom/div
   (dom/style {:width "100vw"
               :height "100vh"})
   ; Event listeners 
   (dom/on "pointerdown" pointerdown)
   (dom/on "pointerup" pointerup)
   (dom/on "pointermove" pointermove)
   ; UI
   (Toolbar.)
   (Canvas.)
   ; Own cursor
   (Cursor. session-id cursor-position)
   ; Other user's cursors
   (e/for [[id position] users]
     (when-not (= session-id id) (Cursor. id position))))
  ; Debugging
  #_(Debugger. paths)
  ; Detect when user joins/leaves
  (e/server
   (swap! !users assoc session-id [nil nil])
   (e/on-unmount #(swap! !users dissoc session-id))))

(comment
  @!paths
  (reset! !paths (sorted-map))
  )