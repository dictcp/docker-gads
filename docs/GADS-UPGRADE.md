# GADS 6 compatibility

- GADS 6 removes the old GetStream integration and changes Appium Grid behavior.
- Existing iOS providers need the updated [upstream WebDriverAgent fork](https://github.com/shamanec/WebDriverAgent) and the new upload/selection flow in the hub Admin panel. See the [GADS 6.0 release notes](https://github.com/shamanec/GADS/releases/tag/v6.0.0).
- This stack's default Android provider does not enable iOS. Validate any custom iOS/Appium configuration before upgrading a device farm.
- The original floating MongoDB `6.0` image selector is retained. This PR does not propose a MongoDB major upgrade or existing-volume migration.

## Validation

See [DEPENDENCY-SECURITY.md](../DEPENDENCY-SECURITY.md) for the corrected floating-reference build and scan results. No production data or real device was used.
