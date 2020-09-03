import { createDir, Dir, readDir, readTextFile, writeFile } from "tauri/api/fs";

class SystemConfig {
  version: string = "";
  appDir: string = "";
}

// TODO: app init function to handle the building of app directories
export async function appInit() {
  // TODO: Check for config data
  const configsJSON = await readTextFile("pf2cb/setting.json", {
    dir: Dir.Config
  }).catch(async err => {
    // Build the setting object
    const settings = new SystemConfig();
    settings.version = "0.1";
    settings.appDir = "/home/justin/pf2cb";

    // Build the app directory
    await createDir(settings.appDir).catch(err => {
      console.error(err.toString());
    });

    // Build the config directory
    await createDir("pf2cb", { dir: Dir.Config }).catch(err => {
      console.error(err.toString());
    });

    // Write current settings into the config directory
    await writeFile(
      { path: "pf2cb/setting.json", contents: JSON.stringify(settings) },
      { dir: Dir.Config }
    ).catch(err => {
      console.error(err.toString());
    });

    return JSON.stringify(settings);
  });

  console.log(configsJSON);
}
// TODO: app migration function for when the app directory is moved
// TODO: Generic save function that specifies the object being saved and the record itself
