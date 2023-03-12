(ns prod
  (:gen-class)
  (:require app.painter ; in prod, load app into server so it can accept clients
            hyperfiddle.electric-jetty-server))

(def port (Integer/parseInt (or (System/getenv "PORT") "8080")))

(def electric-server-config
  {:host "0.0.0.0", :port port, :resources-path "public"})

(defn -main [& args]
  (hyperfiddle.electric-jetty-server/start-server! electric-server-config))

; On CLJS side we reuse src/user.cljs for prod entrypoint