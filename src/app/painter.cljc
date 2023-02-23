(ns app.painter

  ; trick shadow into ensuring that client/server always have the same version
  ; all .cljc files containing Electric code must have this line!
  #?(:cljs (:require-macros app.painter)) ; <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  (:require #?(:clj [datascript.core :as d]) ; database on server
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]
            [clojure.string :as str]))

#?(:clj (defonce painted-emojis (atom [])))

#?(:cljs (def mousedown (atom false)))

#?(:cljs (defonce current-emoji (atom "🐱"))) 

#?(:cljs (defonce render-method (atom "canvas")))

#?(:cljs (def scaling-factor (.-devicePixelRatio js/window)))

(def canvas-size 5000)

(e/defn mousemove [e]
  (let [x (.-clientX e)
        y (.-clientY e)
        m (e/watch mousedown)
        e (e/watch current-emoji)]
    (e/server
     (when m
       (swap!
        painted-emojis
        (fn [v]
          (take 10000
                (conj v [x y e]))))))))


(def available-emojis ["🕉" "🧬" "🧿" "🌀" "♻️" "🐍" "🐱" "🫥" "🌰" "🐞" "🐹" "🪙" "🕸" "📞"])

(e/defn DOM-canvas []
  (dom/div
   (e/for [vertex (e/server (reverse (e/watch painted-emojis)))]
     (dom/div
      (dom/text (last vertex))
      (dom/style {:position "absolute"
                  :left (str (first vertex) "px")
                  :top (str (second vertex) "px")
                  :width "10px"
                  :height "10px"
                  :user-select "none"
                  :z-index "-1"
                  :pointer-events "none"})))))

(e/defn Canvas-canvas []
  (dom/canvas
   (dom/props {:width  (* canvas-size scaling-factor)
               :height (* canvas-size scaling-factor)
               :id "canvas"
               :style {:width (str canvas-size "px")
                       :height (str canvas-size "px")}})
   (let [ctx (.getContext dom/node "2d")]
     (e/for [vertex (e/server (e/watch painted-emojis))]
       (let [x (* (first vertex) scaling-factor)
             y (* (second vertex) scaling-factor)
             emoji (last vertex)
             font-size (str (int (* 30 scaling-factor)) "px")]
         (set! (.-font ctx) (str font-size " sans-serif"))
         (.fillText ctx emoji x y))))))

(e/defn App []
  (dom/style {:margin "0"
              :overflow "hidden"
              :user-select "none"
              :background "lightblue"
              :font-family "sans-serif"
              :font-size "30px"})
  (dom/element "style" (dom/text "@keyframes fadeout { from { opacity: 1; } to { opacity: 0; } }"))
  (dom/div
   (dom/style {:width "100vw"
               :height "100vh"})
   (dom/on "mousedown" (e/fn [e] (reset! mousedown true)))
   (dom/on "mouseup" (e/fn [e] (reset! mousedown false)))
   (dom/on "mousemove" mousemove)
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
     (dom/on "click" (e/fn [e] 
                       (e/server (reset! painted-emojis [])) 
                       (when (= "canvas" @render-method)
                         (.. js/document (getElementById "canvas") (getContext "2d") (clearRect 0 0 4000 2000)))))
     (dom/text "🗑️")))
   (dom/div 
    (dom/style {:background "#fff5"
                :backdrop-filter "blur(10px)"
                :position "fixed"
                :top "0"
                :right "0"
                :padding "20px"
                :border-bottom-left-radius "10px"
                :display "flex"
                :flex-direction "column"
                :text-align "center"
                :font-size "16px"
                :gap "10px"})
    (dom/div 
     (dom/style {:color "gray"})
     (dom/text "Render method"))
    (e/for [method ["canvas" "dom"]]
      (dom/div
       (dom/style {:cursor "pointer"
                   :background "green"
                   :border-radius "100px"
                   :color "white"
                   :padding "5px 10px"
                   :text-shadow (if (= (e/watch render-method) method)
                                  "rgb(0 201 255) 1px 2px 3px"
                                  "none")})
       (dom/on "click" (e/fn [e] (reset! render-method method)))
       (dom/text method))))
   (case (e/watch render-method)
     "dom" (DOM-canvas.)
     "canvas" (Canvas-canvas.)))) 