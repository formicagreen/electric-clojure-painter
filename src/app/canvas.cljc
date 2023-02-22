(ns app.canvas

  ; trick shadow into ensuring that client/server always have the same version
  ; all .cljc files containing Electric code must have this line!
  #?(:cljs (:require-macros app.canvas)) ; <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  (:require #?(:clj [datascript.core :as d]) ; database on server
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]
            [clojure.string :as str]))

#?(:clj (defonce painted-emojis (atom [])))

#?(:cljs (def mousedown (atom false)))

#?(:cljs (defonce current-emoji (atom "🐱")))

(def available-emojis ["🕉" "🧬" "🧿" "🌀" "♻️" "🐍" "🐱" "🫥" "🌰" "🐞" "🐹" "🪙" "🕸" "📞"])

(e/defn App []
  (dom/style {:margin "0"
              :overflow "hidden"
              :background-image "linear-gradient(45deg, #cfcbb6 25%, transparent 25%), linear-gradient(-45deg, #cfcbb6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #cfcbb6 75%), linear-gradient(-45deg, transparent 75%, #cfcbb6 75%)"
              :background-size "20px 20px"
              :background-position "0 0, 0 10px, 10px -10px, -10px 0px"
              :user-select "none"
              :font-size "30px"})
  (dom/element "style" (dom/text "@keyframes fadeout { from { opacity: 1; } to { opacity: 0; } }"))
  (dom/div
   (dom/style {:width "100vw"
               :height "100vh"})
   (dom/on "mousedown" (e/fn [e] (reset! mousedown true)))
   (dom/on "mouseup" (e/fn [e] (reset! mousedown false)))
   (dom/on "mousemove" (e/fn [e] (let [x (.-clientX e)
                                       y (.-clientY e)
                                       m (e/watch mousedown)
                                       e (e/watch current-emoji)]
                                   (e/server
                                    (when m
                                      (swap! painted-emojis (fn [v]
                                                              (take 10000
                                                                    (conj v [x y e])))))))))
   (dom/div
    (dom/style {:background "#fff5"
                :backdrop-filter "blur(10px)"
                :position "fixed"
                :top "0"
                :left "0"
                :height "100vh"
                :padding "10px"})
    (e/for [emoji available-emojis]
      (dom/div
       (dom/style {:cursor "pointer"})
       (dom/on "click" (e/fn [e] (reset! current-emoji emoji)))
       (dom/text emoji)))
    (dom/div
     (dom/style {:cursor "pointer" :padding-top "50px"})
     (dom/on "click" (e/fn [e] (e/server (reset! painted-emojis []))))
     (dom/text "🗑️")))
   (dom/canvas
    (dom/props {:width  "800"
                :height "600"})
    (dom/style {:background "white"})
    (let [ctx (.getContext dom/node "2d")]
      (e/for [vertex (e/server (e/watch painted-emojis))]
        (let [x (first vertex)
              y (second vertex)
              e (last vertex)]
          (.fillText ctx e x y)))))))