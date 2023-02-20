(ns user ^:dev/always ; recompile (macroexpand) electricmain when any cljs src changes
  (:require
    app.canvas
    hyperfiddle.electric
    hyperfiddle.electric-dom2))

(def electric-main
  (hyperfiddle.electric/boot ; Electric macroexpansion - Clojure to signals compiler
   (binding [hyperfiddle.electric-dom2/node js/document.body]
     (app.canvas/Canvas.))))

(defonce reactor nil)

(defn ^:dev/after-load ^:export start! []
  (assert (nil? reactor) "reactor already running")
  (set! reactor (electric-main
                  #(js/console.log "Reactor success:" %)
                  #(js/console.error "Reactor failure:" %))))

(defn ^:dev/before-load stop! []
  (when reactor (reactor)) ; teardown
  (set! reactor nil))