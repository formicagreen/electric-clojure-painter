(ns app.painter

  ; trick shadow into ensuring that client/server always have the same version
  ; all .cljc files containing Electric code must have this line!
  #?(:cljs (:require-macros app.painter)) ; <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]
            [hyperfiddle.api :as hf]
            [clojure.string :as str]
            [missionary.core :as m]))

#?(:clj (defonce !canvas-emojis (atom {})))

(e/def canvas-emojis (e/server (e/watch !canvas-emojis)))

#?(:clj (defonce !background (atom "lightblue")))

(e/def background (e/server (e/watch !background)))

#?(:cljs (defonce !render-method (atom "dom")))

(e/def render-method (e/client (e/watch !render-method)))

#?(:clj (defonce !canvas-cleared-times (atom 0))) ; a "clock" - ticks for each clear "event"

(e/def canvas-cleared-times (e/server (e/watch !canvas-cleared-times)))

#?(:clj (def !users (atom {})))

#?(:cljs (def !mousedown (atom false)))

#?(:cljs (defonce !current-emoji (atom "🐱")))

#?(:cljs (def scaling-factor (.-devicePixelRatio js/window)))

#?(:cljs (def !mouse-coords (atom [0 0])))

(e/def mouse-coords (e/client (e/watch !mouse-coords)))


(e/def session-id (e/server (get-in hf/*http-request* [:headers "sec-websocket-key"])))

(def max-emojis 1000)

(comment
  (reset! !canvas-emojis
          (repeatedly 1000
                      (fn [] {:x (rand-int 600)
                              :y (rand-int 600)
                              :emoji "👹"
                              :id (rand-int 1000000000)})))
  (reset! !canvas-emojis [])
  @!canvas-emojis
  1)

(e/defn paint-emoji! [e]
  (let [x (.-clientX e)
        y (.-clientY e)
        m (e/watch !mousedown)
        emoji (e/watch !current-emoji)]
    (reset! !mouse-coords [x y])
    (e/server
     (swap! !users assoc (e/server (get-in hf/*http-request* [:headers "sec-websocket-key"])) [x y])
     (when m
       (swap! !canvas-emojis
              (fn [v] (take max-emojis
                            (conj v
                                  {:x (- x 15) :y y :emoji emoji :id (rand-int 1000000000)}))))))))

(def paint-emojis ["🧬" "🧿" "🌀" "♻️" "🐍" "🐱" "🍊" "🌰" "🐞" "🐧" "🪙"])

#?(:cljs (def canvas-prerenders
           (->> paint-emojis
                (map (fn [emoji]
                       (let [size (* 30 scaling-factor)
                             ; new OffscreenCanvas(size, size)
                             offscreen (js/OffscreenCanvas. (* size 2) (* size 2))
                             ctx (.getContext offscreen "2d")
                             font (str size "px sans-serif")]
                         (set! (.-font ctx) font)
                         (.strokeText ctx emoji 0 size)
                         [emoji offscreen])))
                (into {}))))

(comment
  canvas-size
  cursor-emojis
  canvas-prerenders
  (map #(get canvas-prerenders %) paint-emojis)
  (get canvas-prerenders "🐱")
  current-emoji
  1)

(def cursor-emojis ["👁️" "👽" "🌝" "🌚" "💀" "🐝" "🌸" "🌼"])

(def canvas-size 5000)

(e/defn DOM-canvas []
  (dom/div
   ;; create svg document
   (let [svg (.createElementNS js/document "http://www.w3.org/2000/svg" "svg")
         polygon (.createElementNS js/document "http://www.w3.org/2000/svg" "path")]
     (.setAttribute svg "viewBox" (str "0 0 " canvas-size " " canvas-size))
     (.setAttribute svg "width" (str canvas-size))
     (.setAttribute svg "height" (str canvas-size))
     (.setAttribute svg "id" "svg")
     (.setAttribute svg "style" "position:fixed; top:0; left:0; pointer-events: none;")
     (.setAttribute polygon "id" "polygon")
     (.setAttribute polygon "fill" "rgba(0,0,0,0.3)")
     (.setAttribute polygon "stroke" "rgba(1,1,1,0.7)")
     (.setAttribute polygon "stroke-width" "3")
     (.setAttribute polygon "d" 
                    (str "M"
                         (str/join " " 
                                   (map (fn [e] (str (:x e) "," (:y e)))
                                        canvas-emojis))
                         "z"))
     (.appendChild svg polygon)
     (.appendChild js/document.body svg)

     )
   (comment
     (dom/div
      (when (< (- max-emojis 20) (count canvas-emojis))
        (dom/div
         (dom/style {:background "#fff5"
                     :backdrop-filter "blur(10px)"
                     :position "fixed"
                     :z-index "1"
                     :display "flex"
                     :top "50%"
                     :left "50%"
                     :border-radius "10px"
                     :box-shadow "0 0 5px rgba(0, 0, 0, 0.14)"
                     :padding "10px"})
         (dom/text "⚠️ Emoji level dangerously high!!!")))
      (e/for-by :id [emoji (e/server (reverse canvas-emojis))]
                (dom/div
                 (dom/text (:emoji emoji))
                 (dom/style {:position "absolute"
                             :left (str (:x emoji) "px")
                             :top (str (:y emoji) "px")
                             :width "10px"
                             :height "10px"
                             :padding-bottom "10px"
                             :line-height "0px"
                             :user-select "none"
                             :animation "fade-in 0.2s"
                             :pointer-events "none"})))))))

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
             prerender (get canvas-prerenders (last emoji))
             size (* 30 scaling-factor)]
         (.drawImage ctx prerender x y))))))

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

#?(:cljs
   (defn clear-canvas! [_t] ; ignored
     ; perform this side effect each time the "clock" changes
     (.. js/document ; js global is only allowed in :cljs
         (getElementById "canvas")
         (getContext "2d")
         (clearRect 0 0 canvas-size canvas-size))))

(e/defn App []
  (dom/style {:background background
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
                          .hover:hover { transform: scale(1.2); }
                          @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }"))

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
                :height "calc(100% - 20px)"
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
       (dom/on "click" (e/fn [e] (e/server (reset! !background color)))))))

   ;; Render canvas
   (case render-method
     "dom" (DOM-canvas.)
     "canvas" (Canvas-canvas.)))

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

(comment
  @!users)