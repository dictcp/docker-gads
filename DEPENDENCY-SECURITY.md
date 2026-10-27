# Dependency security evidence (2026-10-27)

| Image | Total | Critical | High | Medium | Low | Unknown |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| GADS baseline | 341 | 3 | 102 | 144 | 87 | 5 |
| GADS latest | 168 | 0 | 43 | 62 | 61 | 2 |
| MongoDB 6.0.28 baseline | 843 | 1 | 327 | 412 | 86 | 17 |
| MongoDB 9.0.4 | 303 | 1 | 62 | 215 | 16 | 9 |

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
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `bsdutils` | `1:2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `bsdutils` | `1:2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `bsdutils` | `1:2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `bsdutils` | `1:2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-54369](https://avd.aquasec.com/nvd/cve-2026-54369) | `libacl1` | `2.3.2-2+b1` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `libblkid1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `libblkid1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `libblkid1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `libblkid1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `liblastlog2-2` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `liblastlog2-2` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `liblastlog2-2` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `liblastlog2-2` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `libmount1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `libmount1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `libmount1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `libmount1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `libsmartcols1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `libsmartcols1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `libsmartcols1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `libsmartcols1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-16742](https://avd.aquasec.com/nvd/cve-2026-16742) | `libsystemd0` | `257.13-1~deb13u1` | not supplied |
| GADS | [CVE-2025-69720](https://avd.aquasec.com/nvd/cve-2025-69720) | `libtinfo6` | `6.5+20250216-2` | not supplied |
| GADS | [CVE-2026-16742](https://avd.aquasec.com/nvd/cve-2026-16742) | `libudev1` | `257.13-1~deb13u1` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `libuuid1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `libuuid1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `libuuid1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `libuuid1` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `login` | `1:4.16.0-2+really2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `login` | `1:4.16.0-2+really2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `login` | `1:4.16.0-2+really2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `login` | `1:4.16.0-2+really2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `mount` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `mount` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `mount` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `mount` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2025-69720](https://avd.aquasec.com/nvd/cve-2025-69720) | `ncurses-base` | `6.5+20250216-2` | not supplied |
| GADS | [CVE-2025-69720](https://avd.aquasec.com/nvd/cve-2025-69720) | `ncurses-bin` | `6.5+20250216-2` | not supplied |
| GADS | [CVE-2026-9538](https://avd.aquasec.com/nvd/cve-2026-9538) | `perl-base` | `5.40.1-6+deb13u1` | not supplied |
| GADS | [CVE-2026-76642](https://avd.aquasec.com/nvd/cve-2026-76642) | `util-linux` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78408](https://avd.aquasec.com/nvd/cve-2026-78408) | `util-linux` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78409](https://avd.aquasec.com/nvd/cve-2026-78409) | `util-linux` | `2.41.5-0+deb13u1` | not supplied |
| GADS | [CVE-2026-78410](https://avd.aquasec.com/nvd/cve-2026-78410) | `util-linux` | `2.41.5-0+deb13u1` | not supplied |
| MongoDB | [CVE-2026-59869](https://avd.aquasec.com/nvd/cve-2026-59869) | `js-yaml` | `3.13.1` | 3.15.0, 4.3.0 |
| MongoDB | [CVE-2026-84375](https://avd.aquasec.com/nvd/cve-2026-84375) | `js-yaml` | `3.13.1` | 4.3.2, 3.15.2 |
| MongoDB | [GHSA-5p4m-2wfm-xmqj](https://github.com/advisories/GHSA-5p4m-2wfm-xmqj) | `js-yaml` | `3.13.1` | 4.3.1, 3.15.1 |
| MongoDB | [CVE-2026-78669](https://avd.aquasec.com/nvd/cve-2026-78669) | `golang.org/x/net` | `v0.59.0` | 0.60.0 |
| MongoDB | [CVE-2026-78667](https://avd.aquasec.com/nvd/cve-2026-78667) | `stdlib` | `v1.26.8` | 1.26.9, 1.27.2 |
| MongoDB | [CVE-2026-78669](https://avd.aquasec.com/nvd/cve-2026-78669) | `stdlib` | `v1.26.8` | 1.26.9, 1.27.2 |
| MongoDB | [CVE-2026-97031](https://avd.aquasec.com/nvd/cve-2026-97031) | `stdlib` | `v1.26.8` | 1.26.9, 1.27.2 |
| MongoDB | [CVE-2026-78667](https://avd.aquasec.com/nvd/cve-2026-78667) | `stdlib` | `v1.27.1` | 1.26.9, 1.27.2 |
| MongoDB | [CVE-2026-78669](https://avd.aquasec.com/nvd/cve-2026-78669) | `stdlib` | `v1.27.1` | 1.26.9, 1.27.2 |
| MongoDB | [CVE-2026-97031](https://avd.aquasec.com/nvd/cve-2026-97031) | `stdlib` | `v1.27.1` | 1.26.9, 1.27.2 |
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
trivy image --scanners vuln mongo:9.0.4
```

The application image was built and its CLI exercised. The latest alternative additionally passed an isolated fresh MongoDB 9 readiness test, the existing database seed script, and a GADS hub embedded-UI HTTP 200 check. Test containers/network were removed. No existing database volume or physical provider/device was operated. Existing deployments must complete the documented MongoDB version/FCV migration before starting the latest stack.
