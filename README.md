# docker-gads

Docker packaging for [shamanec/GADS](https://github.com/shamanec/GADS).

The image is published as:

```text
ghcr.io/dictcp/gads
```

Supported platforms:

```text
linux/amd64
linux/arm64
```

## Quick Start

Install Docker Compose, connect an Android device with USB debugging enabled, then run:

```bash
cp .env.example .env
docker compose up -d
```

Open the hub:

```text
http://127.0.0.1:10000
```

Authentication is disabled by default in `compose.yaml`. If you enable auth with `GADS_AUTH=true`, the default GADS credentials are:

```text
username: admin
password: password
```

## Android Device Setup

The provider container runs with host networking, privileged USB access, and your host ADB keys mounted from `${HOME}/.android`.

On the Android device, enable:

- Developer options
- USB debugging
- Install via USB

On Xiaomi/MIUI devices, an extra **USB install prompt** may appear when GADS installs `GADS Settings`. Tap **Continue install** on the device.

## Optional Device Seed

You can add devices later in the GADS UI, or seed one Android device through `.env`.

Find a connected device:

```bash
adb devices -l
```

Then edit `.env`:

```text
GADS_SEED_DEVICE=true
GADS_DEVICE_UDID=your-device-serial
GADS_DEVICE_NAME=Your Android Device
GADS_DEVICE_OS_VERSION=13
GADS_DEVICE_SCREEN_WIDTH=720
GADS_DEVICE_SCREEN_HEIGHT=1650
```

Apply:

```bash
docker compose up -d
```

## Useful Commands

Check status:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs -f hub provider
```

Check whether the provider sees ADB devices:

```bash
docker compose exec provider adb devices -l
```

Stop:

```bash
docker compose down
```

Remove persisted Mongo/provider data too:

```bash
docker compose down -v
```

## Build Locally

```bash
docker build -t ghcr.io/dictcp/gads:local --build-arg GADS_VERSION=v5.6.0 .
```

The Dockerfile downloads the upstream GADS release source and the matching release UI asset, then builds GADS with the embedded UI.

## Publishing

The GitHub Actions workflow builds and pushes multi-arch images to GitHub Container Registry using `GITHUB_TOKEN`.

By default it builds upstream GADS `v5.6.0`. You can override the release tag from the manual workflow dispatch input.
