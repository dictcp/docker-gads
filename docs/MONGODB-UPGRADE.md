# Upgrade an existing MongoDB volume

The latest stack uses MongoDB 9.0.4. A fresh empty volume can start directly. An existing MongoDB 6 data directory needs a supported staged upgrade; changing the image directly from 6 to 9 is not an upgrade procedure.

## Existing data

- Stop the GADS hub/provider while migrating. Back up the existing database and verify the backup can be restored into a separate test deployment. Keep the original volume and record its existing image/FCV.
- First use the current MongoDB 6.0.28 patch. Verify the application and the `featureCompatibilityVersion` (FCV) before each next stage.
- Use the documented standalone upgrade procedures in order: [6.0 to 7.0](https://www.mongodb.com/docs/manual/release-notes/7.0-upgrade-standalone/), [7.0 to 8.0](https://www.mongodb.com/docs/manual/release-notes/8.0-upgrade-standalone/), then [8.0 to 9.0](https://www.mongodb.com/docs/manual/release-notes/9.0-upgrade-from-8.0-standalone/). Review each version's compatibility notes and driver support before proceeding.
- The Compose `GADS_MONGO_IMAGE` variable selects the same server/client image for `mongo` and `init`, allowing the staged versions without editing the stack.

Example selection for a stage (run only after completing the corresponding official prerequisites):

```sh
GADS_MONGO_IMAGE=mongo:7.0.45 docker compose up -d mongo
# Check readiness and existing data before promoting FCV:
docker compose exec mongo mongosh --quiet --eval 'db.adminCommand({getParameter:1,featureCompatibilityVersion:1})'
```

Use MongoDB 8.0.34 for the next stage, then MongoDB 9.0.4. Set the matching FCV only when instructed by the official procedure and after validation; FCV changes affect downgrade options. After completing the final stage, set `GADS_MONGO_IMAGE=mongo:9.0.4` in `.env` and restart the full stack.

Do not remove the persistent volume as part of this migration. Rollback after a database/FCV upgrade requires the version-specific downgrade procedure or a verified backup; reverting a Git commit alone does not downgrade data.

## GADS 6 compatibility

- GADS 6 removes the old GetStream integration and changes Appium Grid behavior.
- Existing iOS providers need the updated [upstream WebDriverAgent fork](https://github.com/shamanec/WebDriverAgent) and the new upload/selection flow in the hub Admin panel. See the [GADS 6.0 release notes](https://github.com/shamanec/GADS/releases/tag/v6.0.0).
- This Docker stack's default Android provider does not enable iOS. Validate any custom iOS/Appium configuration before upgrading a production device farm.

## Validation limits

The dependency-upgrade work tests a new disposable MongoDB 9 database, the existing seed script, and GADS hub/UI startup. It does not migrate an existing production volume or operate any real provider/device.
