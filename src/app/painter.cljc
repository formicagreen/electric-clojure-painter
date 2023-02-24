(ns app.painter

  ; trick shadow into ensuring that client/server always have the same version
  ; all .cljc files containing Electric code must have this line!
  #?(:cljs (:require-macros app.painter)) ; <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  (:require #?(:clj [datascript.core :as d]) ; database on server
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]
            [hyperfiddle.api :as hf]
            [clojure.string :as str]
            [missionary.core :as m]))


#?(:clj (defonce !background (atom "lightblue")))

#?(:clj (e/def background (e/server (e/watch !background))))

#?(:clj (defonce !canvas-emojis (atom [])))

(e/def canvas-emojis (e/server (e/watch !canvas-emojis)))

#?(:cljs (defonce !render-method (atom "dom")))

(e/def render-method (e/client (e/watch !render-method)))

#?(:clj (defonce !canvas-cleared-times (atom 0))) ; a "clock" - ticks for each clear "event"

(e/def canvas-cleared-times (e/server (e/watch !canvas-cleared-times)))

#?(:clj (def !users (atom {})))

#?(:cljs (def !mousedown (atom false)))

#?(:cljs (defonce !current-emoji (atom "🐱")))

#?(:cljs (def scaling-factor (.-devicePixelRatio js/window)))

(e/defn paint-emoji! [e]
  (let [x (.-clientX e)
        y (.-clientY e)
        m (e/watch !mousedown)
        emoji (e/watch !current-emoji)]
    (e/server
     (swap! !users assoc (e/server (get-in hf/*http-request* [:headers "sec-websocket-key"])) [x y])
     (when m
       (swap! !canvas-emojis
              (fn [v] (take 2000
                            (conj v [(- x 15) (+ y 15) emoji]))))))))

(def paint-emojis ["🧬" "🧿" "🌀" "♻️" "🐍" "🐱" "🍊" "🌰" "🐞" "🐧" "🪙"])

(def cursor-emojis ["👁️" "👽" "🌝" "🌚" "💀" "🐝" "🌸" "🌼"])

(def canvas-size 5000)

(e/defn DOM-canvas []
  (dom/div
   (e/for [emoji (e/server (reverse canvas-emojis))]
     (dom/div
      (dom/text (last emoji))
      (dom/style {:position "absolute"
                  :left (str (first emoji) "px")
                  :top (str (second emoji) "px")
                  :width "10px"
                  :height "10px"
                  :padding-bottom "10px"
                  :line-height "0px"
                  :user-select "none"
                  :pointer-events "none"})))))

(e/defn Canvas-canvas []
  (dom/canvas
   (dom/props {:width  (* canvas-size scaling-factor)
               :height (* canvas-size scaling-factor)
               :id "canvas"
               :style {:width (str canvas-size "px")
                       :height (str canvas-size "px")}})
   (let [ctx (.getContext dom/node "2d")]
     (e/for [emoji canvas-emojis]
       (let [x (* (first emoji) scaling-factor)
             y (* (second emoji) scaling-factor)
             emoji (last emoji)
             font-size (str (int (* 30 scaling-factor)) "px")]
         (set! (.-font ctx) (str font-size " sans-serif"))
         (.fillText ctx emoji x y))))))

(e/defn Button [text fn]
  (dom/div
   (dom/props {:class "hover"})
   (dom/on "click" fn)
   (dom/text text)))

#?(:cljs
   (defn clear-canvas! [_t] ; ignored
     ; perform this side effect each time the "clock" changes
     (.. js/document ; js global is only allowed in :cljs
       (getElementById "canvas")
       (getContext "2d")
       (clearRect 0 0 canvas-size canvas-size))))

(e/defn App []
  (dom/style {:background (e/server (e/watch !background))})
  (dom/link (dom/props {:rel :stylesheet, :href "/index.css"}))

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
   (dom/on "mousedown" (e/fn [e] (reset! !mousedown true)))
   (dom/on "mousedown" paint-emoji!)
   (dom/on "mouseup" (e/fn [e] (reset! !mousedown false)))
   (dom/on "mousemove" paint-emoji!)

   ;; Emoji picker
   (dom/div
    (dom/style {:background "#fff5"
                :backdrop-filter "blur(10px)"
                :position "fixed"
                :z-index "1"
                :display "flex"
                :top "10px"
                :left "10px"
                :border-radius "10px"
                :box-shadow "0 0 5px rgba(0, 0, 0, 0.14)"
                :height "calc(100vh - 20px)"
                :flex-direction "column"
                :justify-content "space-between"
                :padding "10px"})
    (dom/div (e/for [emoji paint-emojis]
               (Button. emoji (e/fn [e] (reset! !current-emoji emoji)))))
    ;; Delete button
    (Button. "🗑️" (e/fn [e]
                     (e/server (reset! !canvas-emojis [])
                               (swap! !canvas-cleared-times inc)))))

   (when (= render-method "canvas") (clear-canvas! canvas-cleared-times)) ; run when parameter changes

   ;; Render method picker
   (dom/div
    (dom/style {:background "#fff5"
                :backdrop-filter "blur(10px)"
                :position "fixed"
                :top "10px"
                :right "10px"
                :padding "10px"
                :border-radius "10px"
                :display "flex"
                :flex-direction "column"
                :text-align "center"
                :box-shadow "0 0 5px rgba(0, 0, 0, 0.14)"
                :z-index "1"
                :font-size "16px"
                :gap "5px"})
    (e/for [method ["canvas" "dom"]]
      (dom/div
       (let [active (=  render-method method)]
         (dom/style {:border-radius "5px"
                     :text-transform "uppercase"
                     :letter-spacing "2px"
                     :padding "5px 10px"
                     :color (if (true? active) "white" "#666")
                     :background (if (true? active) "green" "none")}))
       (dom/on "click" (e/fn [e] (reset! !render-method method)))
       (dom/text method))))

   ;; Background picker

   (dom/div
    (dom/style {:background "#fff5"
                :backdrop-filter "blur(10px)"
                :position "fixed"
                :bottom "10px"
                :right "10px"
                :padding "10px"
                :border-radius "10px"
                :display "flex"
                :flex-direction "column"
                :text-align "center"
                :box-shadow "0 0 5px rgba(0, 0, 0, 0.14)"
                :z-index "1"
                :font-size "16px"
                :gap "5px"})
    (e/for [color ["black" "lightblue" "lightgreen" "lightpink" "lightyellow"]]
      (dom/div
       (dom/style {:border-radius "100px"
                   :border "1px solid #eeea"
                   :width "30px"
                   :height "30px"
                   :padding "10px"
                   :background color})
       (dom/props {:class "hover"})
       (dom/on "click" (e/fn [e] (e/server (reset! !background color))))
       (dom/text background))))

   ;; Render canvas
   (case render-method
     "dom" (DOM-canvas.)
     "canvas" (Canvas-canvas.)))

  ;; User cursors
  (e/for [[session-id position] (e/server (e/watch !users))]
    (dom/div
     (dom/style {:position "absolute"
                 :left (str (- (first position) 15) "px")
                 :top (str (- (second position) 15) "px")
                 :z-index "2"
                 :width "10px"
                 :height "10px"
                 :padding-bottom "10px"
                 :pointer-events "none"})
     (dom/text (cursor-emojis (mod (hash session-id) (count cursor-emojis))))))

  ;; Detect when user joins/leaves
  (e/server
            ; >x is a Missionary flow that attaches side effect to the mount/unmount lifecycle
   (let [session-id (e/server (get-in hf/*http-request* [:headers "sec-websocket-key"]))
         >x (->> (m/observe (fn mount [!]
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

(comment
  @!users
  )