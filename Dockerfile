ARG GADS_VERSION=v5.7.0

FROM golang:1.23-bookworm AS builder
# Honor dependency Go minimums without changing the floating base-image selector.
ENV GOTOOLCHAIN=auto
ARG GADS_VERSION

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates curl unzip \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /src

RUN curl -fsSL "https://github.com/shamanec/GADS/archive/refs/tags/${GADS_VERSION}.tar.gz" -o /tmp/gads.tar.gz \
    && tar -xzf /tmp/gads.tar.gz --strip-components=1 -C /src \
    && rm /tmp/gads.tar.gz

RUN mkdir -p /src/hub-ui \
    && curl -fsSL "https://github.com/shamanec/GADS/releases/download/${GADS_VERSION}/ui-files.zip" -o /tmp/ui-files.zip \
    && unzip -q /tmp/ui-files.zip -d /src/hub-ui \
    && rm /tmp/ui-files.zip

# Refresh vulnerable modules bundled by the upstream source release.
RUN go get \
        github.com/danielpaulus/go-ios@v1.3.2 \
        github.com/gin-contrib/cors@v1.7.9 \
        github.com/gin-gonic/gin@v1.12.0 \
        github.com/klauspost/compress@v1.20.3 \
        github.com/quic-go/quic-go@v0.64.1 \
        go.mongodb.org/mongo-driver@v1.17.10 \
        golang.org/x/crypto@v0.58.0 \
        golang.org/x/net@v0.61.0 \
        golang.org/x/text@v0.43.0 \
    && go get toolchain@patch \
    && go mod tidy \
    && go mod download

RUN CGO_ENABLED=0 go build \
    -tags ui \
    -ldflags="-s -w -X main.AppVersion=${GADS_VERSION}" \
    -o /out/GADS .

FROM debian:bookworm-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        android-tools-adb \
        ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/gads

COPY --from=builder /out/GADS /usr/local/bin/GADS

EXPOSE 10000 11000

ENTRYPOINT ["/usr/local/bin/GADS"]
