# Dependency security evidence (2026-10-27)

| Image | Total | Critical | High | Medium | Low | Unknown |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| GADS baseline | 341 | 3 | 102 | 144 | 87 | 5 |
| GADS minor | 236 | 1 | 56 | 91 | 84 | 4 |
| MongoDB 6.0.28 baseline | 843 | 1 | 327 | 412 | 86 | 17 |

Counts are scanner findings per installed package instance, not unique CVEs or proven exploitable paths. Trivy 0.76.1 used a database updated 2026-10-26T19:14:50Z. No repository Dependabot alerts were open; the image scans reveal components fetched outside this repository's manifests.

## Improvements and residual findings

- Embedded GADS Go findings fall from 108 to 3. The CORS critical advisory, Go standard-library critical advisory, high-severity QUIC/compress/x/crypto/x/net/x/text advisories, and MongoDB Go-driver advisory are absent after the pinned upgrades.
- Remaining embedded-module findings: CVE-2026-26014 (`pion/dtls/v2`, medium), CVE-2026-54909 (`pion/stun`, medium), and GO-2026-5932 (`x/crypto`, unknown). The scanner supplies no fixed version for these three findings.
- The upstream MongoDB service image still reports **CVE-2025-68121 (critical)** in the Go standard library embedded in `/usr/local/bin/gosu`. Both the old MongoDB 6.0.28 and latest official MongoDB 9.0.4 image contain this finding. Updating the MongoDB image does not remove it. The scan does not establish reachability in gosu.
- OS packages retain high/medium/low findings, including advisories with no distro fix currently listed. They are not dismissed or claimed resolved.

## Remaining critical/high findings

The table groups duplicate scanner observations by image, advisory, package, and installed version. Lower-severity totals are retained above.

| Image | Advisory | Package | Installed | Fixed version reported |
| --- | --- | --- | --- | --- |
| GADS | [CVE-2026-53613](https://avd.aquasec.com/nvd/cve-2026-53613) | `bsdutils` | `1:2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-53615](https://avd.aquasec.com/nvd/cve-2026-53615) | `bsdutils` | `1:2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `bsdutils` | `1:2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `bsdutils` | `1:2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `bsdutils` | `1:2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `bsdutils` | `1:2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-41992](https://avd.aquasec.com/nvd/cve-2026-41992) | `gzip` | `1.12-1` | not supplied |
| GADS | [CVE-2026-54369](https://avd.aquasec.com/nvd/cve-2026-54369) | `libacl1` | `2.3.1-3` | not supplied |
| GADS | [CVE-2026-53613](https://avd.aquasec.com/nvd/cve-2026-53613) | `libblkid1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-53615](https://avd.aquasec.com/nvd/cve-2026-53615) | `libblkid1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `libblkid1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `libblkid1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `libblkid1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `libblkid1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-53613](https://avd.aquasec.com/nvd/cve-2026-53613) | `libmount1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-53615](https://avd.aquasec.com/nvd/cve-2026-53615) | `libmount1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `libmount1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `libmount1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `libmount1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `libmount1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-53613](https://avd.aquasec.com/nvd/cve-2026-53613) | `libsmartcols1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-53615](https://avd.aquasec.com/nvd/cve-2026-53615) | `libsmartcols1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `libsmartcols1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `libsmartcols1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `libsmartcols1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `libsmartcols1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-16742](https://avd.aquasec.com/nvd/cve-2026-16742) | `libsystemd0` | `252.39-1~deb12u2` | not supplied |
| GADS | [CVE-2025-69720](https://avd.aquasec.com/nvd/cve-2025-69720) | `libtinfo6` | `6.4-4` | not supplied |
| GADS | [CVE-2026-16742](https://avd.aquasec.com/nvd/cve-2026-16742) | `libudev1` | `252.39-1~deb12u2` | not supplied |
| GADS | [CVE-2026-53613](https://avd.aquasec.com/nvd/cve-2026-53613) | `libuuid1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-53615](https://avd.aquasec.com/nvd/cve-2026-53615) | `libuuid1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `libuuid1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `libuuid1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `libuuid1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `libuuid1` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-53613](https://avd.aquasec.com/nvd/cve-2026-53613) | `mount` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-53615](https://avd.aquasec.com/nvd/cve-2026-53615) | `mount` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `mount` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `mount` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `mount` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `mount` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2025-69720](https://avd.aquasec.com/nvd/cve-2025-69720) | `ncurses-base` | `6.4-4` | not supplied |
| GADS | [CVE-2025-69720](https://avd.aquasec.com/nvd/cve-2025-69720) | `ncurses-bin` | `6.4-4` | not supplied |
| GADS | [CVE-2026-9538](https://avd.aquasec.com/nvd/cve-2026-9538) | `perl-base` | `5.36.0-7+deb12u4` | not supplied |
| GADS | [CVE-2026-53613](https://avd.aquasec.com/nvd/cve-2026-53613) | `util-linux` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-53615](https://avd.aquasec.com/nvd/cve-2026-53615) | `util-linux` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `util-linux` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `util-linux` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `util-linux` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `util-linux` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-53613](https://avd.aquasec.com/nvd/cve-2026-53613) | `util-linux-extra` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-53615](https://avd.aquasec.com/nvd/cve-2026-53615) | `util-linux-extra` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `util-linux-extra` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `util-linux-extra` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `util-linux-extra` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `util-linux-extra` | `2.38.1-5+deb12u3` | not supplied |
| GADS | [CVE-2023-45853](https://avd.aquasec.com/nvd/cve-2023-45853) | `zlib1g` | `1:1.2.13.dfsg-1` | not supplied |
| MongoDB | [CVE-2026-45447](https://avd.aquasec.com/nvd/cve-2026-45447) | `libssl3` | `3.0.2-0ubuntu1.23` | 3.0.2-0ubuntu1.25 |
| MongoDB | [CVE-2026-84782](https://avd.aquasec.com/nvd/cve-2026-84782) | `libssl3` | `3.0.2-0ubuntu1.23` | 3.0.2-0ubuntu1.30 |
| MongoDB | [CVE-2026-45447](https://avd.aquasec.com/nvd/cve-2026-45447) | `openssl` | `3.0.2-0ubuntu1.23` | 3.0.2-0ubuntu1.25 |
| MongoDB | [CVE-2026-84782](https://avd.aquasec.com/nvd/cve-2026-84782) | `openssl` | `3.0.2-0ubuntu1.23` | 3.0.2-0ubuntu1.30 |
| MongoDB | [CVE-2026-59869](https://avd.aquasec.com/nvd/cve-2026-59869) | `js-yaml` | `3.13.1` | 3.15.0, 4.3.0 |
| MongoDB | [CVE-2026-84375](https://avd.aquasec.com/nvd/cve-2026-84375) | `js-yaml` | `3.13.1` | 4.3.2, 3.15.2 |
| MongoDB | [GHSA-5p4m-2wfm-xmqj](https://github.com/advisories/GHSA-5p4m-2wfm-xmqj) | `js-yaml` | `3.13.1` | 4.3.1, 3.15.1 |
| MongoDB | [CVE-2026-63209](https://avd.aquasec.com/nvd/cve-2026-63209) | `github.com/klauspost/compress` | `v1.17.8` | 1.18.7 |
| MongoDB | [CVE-2026-39828](https://avd.aquasec.com/nvd/cve-2026-39828) | `golang.org/x/crypto` | `v0.45.0` | 0.52.0 |
| MongoDB | [CVE-2026-39829](https://avd.aquasec.com/nvd/cve-2026-39829) | `golang.org/x/crypto` | `v0.45.0` | 0.52.0 |
| MongoDB | [CVE-2026-39830](https://avd.aquasec.com/nvd/cve-2026-39830) | `golang.org/x/crypto` | `v0.45.0` | 0.52.0 |
| MongoDB | [CVE-2026-39831](https://avd.aquasec.com/nvd/cve-2026-39831) | `golang.org/x/crypto` | `v0.45.0` | 0.52.0 |
| MongoDB | [CVE-2026-39832](https://avd.aquasec.com/nvd/cve-2026-39832) | `golang.org/x/crypto` | `v0.45.0` | 0.52.0 |
| MongoDB | [CVE-2026-39835](https://avd.aquasec.com/nvd/cve-2026-39835) | `golang.org/x/crypto` | `v0.45.0` | 0.52.0 |
| MongoDB | [CVE-2026-42508](https://avd.aquasec.com/nvd/cve-2026-42508) | `golang.org/x/crypto` | `v0.45.0` | 0.52.0 |
| MongoDB | [CVE-2026-46595](https://avd.aquasec.com/nvd/cve-2026-46595) | `golang.org/x/crypto` | `v0.45.0` | 0.52.0 |
| MongoDB | [CVE-2026-46597](https://avd.aquasec.com/nvd/cve-2026-46597) | `golang.org/x/crypto` | `v0.45.0` | 0.52.0 |
| MongoDB | [CVE-2026-56854](https://avd.aquasec.com/nvd/cve-2026-56854) | `golang.org/x/crypto` | `v0.45.0` | 0.55.0 |
| MongoDB | [CVE-2026-25681](https://avd.aquasec.com/nvd/cve-2026-25681) | `golang.org/x/net` | `v0.47.0` | 0.55.0 |
| MongoDB | [CVE-2026-27136](https://avd.aquasec.com/nvd/cve-2026-27136) | `golang.org/x/net` | `v0.47.0` | 0.55.0 |
| MongoDB | [CVE-2026-33814](https://avd.aquasec.com/nvd/cve-2026-33814) | `golang.org/x/net` | `v0.47.0` | 0.53.0 |
| MongoDB | [CVE-2026-39821](https://avd.aquasec.com/nvd/cve-2026-39821) | `golang.org/x/net` | `v0.47.0` | 0.55.0 |
| MongoDB | [CVE-2026-46600](https://avd.aquasec.com/nvd/cve-2026-46600) | `golang.org/x/net` | `v0.47.0` | 0.56.0 |
| MongoDB | [CVE-2026-78669](https://avd.aquasec.com/nvd/cve-2026-78669) | `golang.org/x/net` | `v0.47.0` | 0.60.0 |
| MongoDB | [CVE-2026-56851](https://avd.aquasec.com/nvd/cve-2026-56851) | `golang.org/x/text` | `v0.31.0` | 0.41.0 |
| MongoDB | [CVE-2026-56852](https://avd.aquasec.com/nvd/cve-2026-56852) | `golang.org/x/text` | `v0.31.0` | 0.39.0 |
| MongoDB | [CVE-2026-27145](https://avd.aquasec.com/nvd/cve-2026-27145) | `stdlib` | `v1.25.9` | 1.25.11, 1.26.4 |
| MongoDB | [CVE-2026-33811](https://avd.aquasec.com/nvd/cve-2026-33811) | `stdlib` | `v1.25.9` | 1.25.10, 1.26.3 |
| MongoDB | [CVE-2026-33814](https://avd.aquasec.com/nvd/cve-2026-33814) | `stdlib` | `v1.25.9` | 1.25.10, 1.26.3 |
| MongoDB | [CVE-2026-33818](https://avd.aquasec.com/nvd/cve-2026-33818) | `stdlib` | `v1.25.9` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-39820](https://avd.aquasec.com/nvd/cve-2026-39820) | `stdlib` | `v1.25.9` | 1.25.10, 1.26.3 |
| MongoDB | [CVE-2026-39821](https://avd.aquasec.com/nvd/cve-2026-39821) | `stdlib` | `v1.25.9` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-39822](https://avd.aquasec.com/nvd/cve-2026-39822) | `stdlib` | `v1.25.9` | 1.25.12, 1.26.5, 1.27.0-rc.2 |
| MongoDB | [CVE-2026-39836](https://avd.aquasec.com/nvd/cve-2026-39836) | `stdlib` | `v1.25.9` | 1.25.10, 1.26.3 |
| MongoDB | [CVE-2026-42499](https://avd.aquasec.com/nvd/cve-2026-42499) | `stdlib` | `v1.25.9` | 1.25.10, 1.26.3 |
| MongoDB | [CVE-2026-42504](https://avd.aquasec.com/nvd/cve-2026-42504) | `stdlib` | `v1.25.9` | 1.25.11, 1.26.4 |
| MongoDB | [CVE-2026-56853](https://avd.aquasec.com/nvd/cve-2026-56853) | `stdlib` | `v1.25.9` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-56858](https://avd.aquasec.com/nvd/cve-2026-56858) | `stdlib` | `v1.25.9` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-56859](https://avd.aquasec.com/nvd/cve-2026-56859) | `stdlib` | `v1.25.9` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-56860](https://avd.aquasec.com/nvd/cve-2026-56860) | `stdlib` | `v1.25.9` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-56862](https://avd.aquasec.com/nvd/cve-2026-56862) | `stdlib` | `v1.25.9` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-78667](https://avd.aquasec.com/nvd/cve-2026-78667) | `stdlib` | `v1.25.9` | 1.26.9, 1.27.2 |
| MongoDB | [CVE-2026-78669](https://avd.aquasec.com/nvd/cve-2026-78669) | `stdlib` | `v1.25.9` | 1.26.9, 1.27.2 |
| MongoDB | [CVE-2026-97031](https://avd.aquasec.com/nvd/cve-2026-97031) | `stdlib` | `v1.25.9` | 1.26.9, 1.27.2 |
| MongoDB | [CVE-2025-68121](https://avd.aquasec.com/nvd/cve-2025-68121) | `stdlib` | `v1.24.6` | 1.24.13, 1.25.7, 1.26.0-rc.3 |
| MongoDB | [CVE-2025-61726](https://avd.aquasec.com/nvd/cve-2025-61726) | `stdlib` | `v1.24.6` | 1.24.12, 1.25.6 |
| MongoDB | [CVE-2025-61729](https://avd.aquasec.com/nvd/cve-2025-61729) | `stdlib` | `v1.24.6` | 1.24.11, 1.25.5 |
| MongoDB | [CVE-2026-25679](https://avd.aquasec.com/nvd/cve-2026-25679) | `stdlib` | `v1.24.6` | 1.25.8, 1.26.1 |
| MongoDB | [CVE-2026-27145](https://avd.aquasec.com/nvd/cve-2026-27145) | `stdlib` | `v1.24.6` | 1.25.11, 1.26.4 |
| MongoDB | [CVE-2026-32280](https://avd.aquasec.com/nvd/cve-2026-32280) | `stdlib` | `v1.24.6` | 1.25.9, 1.26.2 |
| MongoDB | [CVE-2026-32281](https://avd.aquasec.com/nvd/cve-2026-32281) | `stdlib` | `v1.24.6` | 1.25.9, 1.26.2 |
| MongoDB | [CVE-2026-32283](https://avd.aquasec.com/nvd/cve-2026-32283) | `stdlib` | `v1.24.6` | 1.25.9, 1.26.2 |
| MongoDB | [CVE-2026-33811](https://avd.aquasec.com/nvd/cve-2026-33811) | `stdlib` | `v1.24.6` | 1.25.10, 1.26.3 |
| MongoDB | [CVE-2026-33814](https://avd.aquasec.com/nvd/cve-2026-33814) | `stdlib` | `v1.24.6` | 1.25.10, 1.26.3 |
| MongoDB | [CVE-2026-33818](https://avd.aquasec.com/nvd/cve-2026-33818) | `stdlib` | `v1.24.6` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-39820](https://avd.aquasec.com/nvd/cve-2026-39820) | `stdlib` | `v1.24.6` | 1.25.10, 1.26.3 |
| MongoDB | [CVE-2026-39821](https://avd.aquasec.com/nvd/cve-2026-39821) | `stdlib` | `v1.24.6` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-39822](https://avd.aquasec.com/nvd/cve-2026-39822) | `stdlib` | `v1.24.6` | 1.25.12, 1.26.5, 1.27.0-rc.2 |
| MongoDB | [CVE-2026-39836](https://avd.aquasec.com/nvd/cve-2026-39836) | `stdlib` | `v1.24.6` | 1.25.10, 1.26.3 |
| MongoDB | [CVE-2026-42499](https://avd.aquasec.com/nvd/cve-2026-42499) | `stdlib` | `v1.24.6` | 1.25.10, 1.26.3 |
| MongoDB | [CVE-2026-42504](https://avd.aquasec.com/nvd/cve-2026-42504) | `stdlib` | `v1.24.6` | 1.25.11, 1.26.4 |
| MongoDB | [CVE-2026-56853](https://avd.aquasec.com/nvd/cve-2026-56853) | `stdlib` | `v1.24.6` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-56858](https://avd.aquasec.com/nvd/cve-2026-56858) | `stdlib` | `v1.24.6` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-56859](https://avd.aquasec.com/nvd/cve-2026-56859) | `stdlib` | `v1.24.6` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-56860](https://avd.aquasec.com/nvd/cve-2026-56860) | `stdlib` | `v1.24.6` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-56862](https://avd.aquasec.com/nvd/cve-2026-56862) | `stdlib` | `v1.24.6` | 1.25.13, 1.26.6, 1.27.0-rc.3 |
| MongoDB | [CVE-2026-78667](https://avd.aquasec.com/nvd/cve-2026-78667) | `stdlib` | `v1.24.6` | 1.26.9, 1.27.2 |
| MongoDB | [CVE-2026-78669](https://avd.aquasec.com/nvd/cve-2026-78669) | `stdlib` | `v1.24.6` | 1.26.9, 1.27.2 |
| MongoDB | [CVE-2026-97031](https://avd.aquasec.com/nvd/cve-2026-97031) | `stdlib` | `v1.24.6` | 1.26.9, 1.27.2 |

## Reproduce

```sh
docker build --pull -t gads-upgrade-check .
trivy image --scanners vuln gads-upgrade-check
trivy image --scanners vuln mongo:6.0.28
```

The application image was built and its CLI exercised. The latest alternative additionally passed an isolated fresh MongoDB 9 readiness test, the existing database seed script, and a GADS hub embedded-UI HTTP 200 check. Test containers/network were removed. No existing database volume or physical provider/device was operated. Existing deployments must complete the documented MongoDB version/FCV migration before starting the latest stack.
