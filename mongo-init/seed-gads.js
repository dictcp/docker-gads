const providerNickname = process.env.GADS_PROVIDER_NICKNAME || "DockerProvider";
const providerHost = process.env.GADS_PROVIDER_HOST || "127.0.0.1";
const providerPort = Number(process.env.GADS_PROVIDER_PORT || "11000");
const seedDevice = (process.env.GADS_SEED_DEVICE || "false").toLowerCase() === "true";
const deviceUdid = process.env.GADS_DEVICE_UDID || "";

let workspace = db.workspaces.findOne({ is_default: true });
if (!workspace) {
  const result = db.workspaces.insertOne({
    name: "Default Workspace",
    description: "This is the default workspace.",
    is_default: true,
    tenant: "default",
  });
  workspace = db.workspaces.findOne({ _id: result.insertedId });
}

db.providers.updateOne(
  { nickname: providerNickname },
  {
    $set: {
      os: "linux",
      nickname: providerNickname,
      host_address: providerHost,
      port: providerPort,
      use_selenium_grid: false,
      selenium_grid: "",
      provide_android: true,
      provide_ios: false,
      provide_tizen: false,
      provide_webos: false,
      wda_bundle_id: "",
      supervision_password: "",
      use_gads_ios_stream: false,
      setup_appium_servers: false,
      last_updated: Date.now(),
    },
  },
  { upsert: true }
);

if (seedDevice && deviceUdid) {
  db.new_devices.updateOne(
    { udid: deviceUdid },
    {
      $set: {
        udid: deviceUdid,
        os: "android",
        name: process.env.GADS_DEVICE_NAME || "Android Device",
        os_version: process.env.GADS_DEVICE_OS_VERSION || "13",
        ip_address: "",
        provider: providerNickname,
        usage: "control",
        screen_width: process.env.GADS_DEVICE_SCREEN_WIDTH || "720",
        screen_height: process.env.GADS_DEVICE_SCREEN_HEIGHT || "1650",
        device_type: "real",
        use_webrtc_video: false,
        workspace_id: workspace._id.toString(),
        stream_type: process.env.GADS_DEVICE_STREAM_TYPE || "mjpeg",
      },
    },
    { upsert: true }
  );
  print(`Seeded Android device ${deviceUdid}`);
} else {
  print("Skipped device seed. Set GADS_SEED_DEVICE=true and GADS_DEVICE_UDID to seed one Android device.");
}

db.global_settings.updateOne(
  { type: "stream-settings" },
  {
    $set: {
      type: "stream-settings",
      settings: {
        target_fps: 15,
        jpeg_quality: 75,
        scaling_factor_android: 50,
        scaling_factor_ios: 50,
      },
      last_updated: new Date(),
    },
  },
  { upsert: true }
);

print(`Seeded provider ${providerNickname}`);
