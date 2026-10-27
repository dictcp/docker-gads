# Dependency security validation

- Scan date: 2026-10-27; Trivy 0.76.1 with vulnerability DB updated 2026-10-26T19:14:50Z.
- Pinned GADS source/UI release: v6.1.0.
- Original floating selectors remain unchanged: `golang:1.23-bookworm`, `debian:bookworm-slim`, `mongo:6.0`, and all GitHub Action aliases.
- The upstream Go module security updates require Go >=1.26. The builder enables standard `GOTOOLCHAIN=auto`, then `go get toolchain@patch` selects the current patch of the module-required family. No numeric compiler pin is added. Both inspected binaries were built with Go1.26.10. See [Go toolchain documentation](https://go.dev/doc/toolchain).
- MongoDB's floating 6.0 channel resolved to 6.0.28 during validation. No database major upgrade or existing-volume migration is proposed.

## Corrected result

| Image | Findings | Critical | High | Medium | Low | Unknown |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Original GADS baseline | 341 | 3 | 102 | 144 | 87 | 5 |
| GADS v6.1.0, original floating image channels | 236 | 1 | 56 | 91 | 84 | 4 |
| MongoDB 6.0 channel | 843 | 1 | 327 | 412 | 86 | 17 |

- Counts are package-instance advisory findings, not unique CVEs or proof of exploitation.
- The Go binary retains three findings: two medium Pion advisories without a reported fix and one unknown-severity x/crypto advisory. There are no Go high/critical findings in these compiled binaries.
- Remaining critical/high OS and bundled-helper findings are listed below. MongoDB's bundled gosu retains CVE-2025-68121. The stack is not vulnerability-free.
- The older report for a Debian13/MongoDB9 configuration is superseded: those channel changes were removed to retain the original floating selectors.

## Verification

- Both corrected amd64 images build and their CLI starts.
- Isolated MongoDB6.0 readiness, the existing seed script, and the GADS6.1 hub/UI test pass (HTTP200). Test containers and the temporary network were removed; no real device or production data was used.
- Compose/YAML/actionlint and `git diff --check` pass. Updated-head multiarch CI remains a separate check.
- Local validation used temporary Dockerfile copies with shared Go cache mounts to fit disk space; source, dependency commands, selectors and resulting runtime images match the committed recipe. No cache mount is added to the project Dockerfile.
- Reproduce a fresh build using `docker build --pull --no-cache -t local/gads .`; scan the resulting image with `trivy image --scanners vuln local/gads`.

## Remaining findings

### GADS remaining critical/high advisories

| Advisory | Severity | Packages | Fixed versions reported |
| --- | --- | --- | --- |
| CVE-2023-45853 | CRITICAL | zlib1g | No fixed version reported |
| CVE-2025-69720 | HIGH | libtinfo6, ncurses-base, ncurses-bin | No fixed version reported |
| CVE-2026-16742 | HIGH | libsystemd0, libudev1 | No fixed version reported |
| CVE-2026-41992 | HIGH | gzip | No fixed version reported |
| CVE-2026-53613 | HIGH | bsdutils, libblkid1, libmount1, libsmartcols1, libuuid1, mount, util-linux, util-linux-extra | No fixed version reported |
| CVE-2026-53615 | HIGH | bsdutils, libblkid1, libmount1, libsmartcols1, libuuid1, mount, util-linux, util-linux-extra | No fixed version reported |
| CVE-2026-54369 | HIGH | libacl1 | No fixed version reported |
| CVE-2026-76642 | HIGH | bsdutils, libblkid1, libmount1, libsmartcols1, libuuid1, mount, util-linux, util-linux-extra | No fixed version reported |
| CVE-2026-78408 | HIGH | bsdutils, libblkid1, libmount1, libsmartcols1, libuuid1, mount, util-linux, util-linux-extra | No fixed version reported |
| CVE-2026-78409 | HIGH | bsdutils, libblkid1, libmount1, libsmartcols1, libuuid1, mount, util-linux, util-linux-extra | No fixed version reported |
| CVE-2026-78410 | HIGH | bsdutils, libblkid1, libmount1, libsmartcols1, libuuid1, mount, util-linux, util-linux-extra | No fixed version reported |
| CVE-2026-9538 | HIGH | perl-base | No fixed version reported |

### MongoDB remaining critical/high advisories

| Advisory | Severity | Packages | Fixed versions reported |
| --- | --- | --- | --- |
| CVE-2025-68121 | CRITICAL | stdlib | 1.24.13, 1.25.7, 1.26.0-rc.3 |
| CVE-2025-61726 | HIGH | stdlib | 1.24.12, 1.25.6 |
| CVE-2025-61729 | HIGH | stdlib | 1.24.11, 1.25.5 |
| CVE-2026-25679 | HIGH | stdlib | 1.25.8, 1.26.1 |
| CVE-2026-25681 | HIGH | golang.org/x/net | 0.55.0 |
| CVE-2026-27136 | HIGH | golang.org/x/net | 0.55.0 |
| CVE-2026-27145 | HIGH | stdlib | 1.25.11, 1.26.4 |
| CVE-2026-32280 | HIGH | stdlib | 1.25.9, 1.26.2 |
| CVE-2026-32281 | HIGH | stdlib | 1.25.9, 1.26.2 |
| CVE-2026-32283 | HIGH | stdlib | 1.25.9, 1.26.2 |
| CVE-2026-33811 | HIGH | stdlib | 1.25.10, 1.26.3 |
| CVE-2026-33814 | HIGH | golang.org/x/net, stdlib | 0.53.0, 1.25.10, 1.26.3 |
| CVE-2026-33818 | HIGH | stdlib | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| CVE-2026-39820 | HIGH | stdlib | 1.25.10, 1.26.3 |
| CVE-2026-39821 | HIGH | golang.org/x/net, stdlib | 0.55.0, 1.25.13, 1.26.6, 1.27.0-rc.3 |
| CVE-2026-39822 | HIGH | stdlib | 1.25.12, 1.26.5, 1.27.0-rc.2 |
| CVE-2026-39828 | HIGH | golang.org/x/crypto | 0.52.0 |
| CVE-2026-39829 | HIGH | golang.org/x/crypto | 0.52.0 |
| CVE-2026-39830 | HIGH | golang.org/x/crypto | 0.52.0 |
| CVE-2026-39831 | HIGH | golang.org/x/crypto | 0.52.0 |
| CVE-2026-39832 | HIGH | golang.org/x/crypto | 0.52.0 |
| CVE-2026-39835 | HIGH | golang.org/x/crypto | 0.52.0 |
| CVE-2026-39836 | HIGH | stdlib | 1.25.10, 1.26.3 |
| CVE-2026-42499 | HIGH | stdlib | 1.25.10, 1.26.3 |
| CVE-2026-42504 | HIGH | stdlib | 1.25.11, 1.26.4 |
| CVE-2026-42508 | HIGH | golang.org/x/crypto | 0.52.0 |
| CVE-2026-45447 | HIGH | libssl3, openssl | 3.0.2-0ubuntu1.25 |
| CVE-2026-46595 | HIGH | golang.org/x/crypto | 0.52.0 |
| CVE-2026-46597 | HIGH | golang.org/x/crypto | 0.52.0 |
| CVE-2026-46600 | HIGH | golang.org/x/net | 0.56.0 |
| CVE-2026-56851 | HIGH | golang.org/x/text | 0.41.0 |
| CVE-2026-56852 | HIGH | golang.org/x/text | 0.39.0 |
| CVE-2026-56853 | HIGH | stdlib | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| CVE-2026-56854 | HIGH | golang.org/x/crypto | 0.55.0 |
| CVE-2026-56858 | HIGH | stdlib | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| CVE-2026-56859 | HIGH | stdlib | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| CVE-2026-56860 | HIGH | stdlib | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| CVE-2026-56862 | HIGH | stdlib | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| CVE-2026-59869 | HIGH | js-yaml | 3.15.0, 4.3.0 |
| CVE-2026-63209 | HIGH | github.com/klauspost/compress | 1.18.7 |
| CVE-2026-78667 | HIGH | stdlib | 1.26.9, 1.27.2 |
| CVE-2026-78669 | HIGH | golang.org/x/net, stdlib | 0.60.0, 1.26.9, 1.27.2 |
| CVE-2026-84375 | HIGH | js-yaml | 4.3.2, 3.15.2 |
| CVE-2026-84782 | HIGH | libssl3, openssl | 3.0.2-0ubuntu1.30 |
| CVE-2026-97031 | HIGH | stdlib | 1.26.9, 1.27.2 |
| GHSA-5p4m-2wfm-xmqj | HIGH | js-yaml | 4.3.1, 3.15.1 |
