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

#?(:clj (defonce !paths (atom {})))

#?(:clj (def !users (atom {})))

#?(:cljs (def !current-path (atom nil)))

#?(:cljs (defonce !current-color (atom "#0f172a")))

#?(:cljs (def !cursor-position (atom [nil nil])))

(e/def paths (e/server (e/watch !paths)))

(e/def current-color (e/client (e/watch !current-color)))

(e/def current-path (e/client (e/watch !current-path)))

(e/def mouse-position (e/client (e/watch !cursor-position)))

(e/def session-id (e/server (get-in hf/*http-request* [:headers "sec-websocket-key"])))

(e/defn pointerdown [e] (reset! !current-path (rand-int 100000000)))

(e/defn pointerup [e] (reset! !current-path nil))

(e/defn pointermove [e]
  (let [x (.-clientX e)
        y (.-clientY e)]
    (reset! !cursor-position [x y])
    (e/server
     (swap! !users assoc session-id [x y])
     (when current-path
       (swap! !paths #(-> %
                          (update-in [current-path :points] conj [x y])
                          (assoc-in [current-path :color] current-color)))))))

(e/defn Cursor [id position]
  (let [[x y] position
        offset 15]
   (when-not (nil? (first position))
    (dom/div
     (dom/style {:position "absolute"
                 :left (str (- x offset) "px")
                 :top (str (- y offset) "px")
                 :z-index "2"
                 :width "10px"
                 :height "10px"
                 :padding-bottom "10px"
                 :pointer-events "none"})
     (let [cursors ["👁️" "👽" "🌝" "🌚"
                    "🐝" "🌸" "🌼" "🌱"
                    "🧿" "🪲" "🌍" "🐬"]
           index (mod (hash id) (count cursors))]
       (dom/text (cursors index)))))))

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
      (e/for-by first [[k v] paths]
                (let [draw (->> (:points v)
                                (map (fn [[x y]] (str x "," y)))
                                (str/join " ")
                                (str "M"))]
                  (e/client
                   (svg/path (dom/props {:d draw
                                         :fill "none"
                                         :stroke (:color v)
                                         :stroke-width "5"
                                         :stroke-opacity "0.7"})))))))))

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
    ; Delete button
   (dom/div
    (dom/props {:class "hover"})
    (dom/on "click"
            (e/fn [e]
              (e/server
               (reset! !paths {}))))
    (dom/text "🗑️"))))

(e/defn App []
  
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

   (Toolbar.)

   (Canvas.)

   ; Own cursor
   (Cursor. session-id mouse-position)

   ; Other user's cursors
   (e/for [[id position] (e/server (e/watch !users))]
     (when-not (= session-id id) (Cursor. id position))))

  ; Detect when user joins/leaves
  (e/server
   (swap! !users assoc session-id [nil nil])
   (e/on-unmount #(swap! !users dissoc session-id))))