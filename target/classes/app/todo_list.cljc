(ns app.todo-list

  ; trick shadow into ensuring that client/server always have the same version
  ; all .cljc files containing Electric code must have this line!
  #?(:cljs (:require-macros app.todo-list)) ; <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  (:require #?(:clj [datascript.core :as d]) ; database on server
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]
            [clojure.string :as str]))

(def vertices (atom []))

(def mousedown (atom false))

(def current-emoji (atom "🐱"))

(def emojis ["🐱" "🫥" "🐞" "🪙" "🕉" "🐍" "📞" "🌀" "🌰" "🕸" "🐶" "🐭" "🐹" "🧿" "♻️" "🏴‍☠️" "🧬"])

(e/defn Canvas []
  (dom/style {:margin "0"
              :overflow "hidden"
              :background "lightblue"                    
              :user-select "none"
              :font-size "30px"})
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
                                      (swap! vertices (fn [v] 
                                                        (take 10000
                                                              (conj v [x y e])))))))))
   (dom/div
    (dom/style {:background "#0003"
                :position "fixed"
                :top "0"
                :left "0"
                :height "100vh"
                :padding "10px"})
    (e/for [emoji emojis]
      (dom/div
       (dom/style {:cursor "pointer"})
       (dom/on "click" (e/fn [e] (reset! current-emoji emoji)))
       (dom/text emoji)))
    (dom/div
     (dom/style {:cursor "pointer" :padding-top "50px"})
     (dom/on "click" (e/fn [e] (e/server (reset! vertices []))))
     (dom/text "🗑️")))
   (dom/div
    (e/for [vertex (e/server (reverse (e/watch vertices)))]
      (dom/div
       (dom/text (last vertex))
       (dom/style {:position "absolute"
                   :left (str (first vertex) "px")
                   :top (str (second vertex) "px")
                   :width "10px"
                   :height "10px"
                   :user-select "none"
                   :z-index "-1"
                   :pointer-events "none"}))))))

(comment
  @!vertices
  (reset! !vertices [[1 2] [3 4]])
  @emoji
  )