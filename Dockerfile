# Base image that includes the Clojure CLI tools
FROM clojure:openjdk-17-tools-deps-buster

RUN mkdir -p /app
WORKDIR /app

# Prepare deps
COPY deps.edn /app
RUN clojure -P

# Add sources
COPY . /app

CMD clojure -A:dev -X

EXPOSE 8080