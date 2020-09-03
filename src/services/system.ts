import { createDir, Dir, readDir } from "tauri/api/fs";

// TODO: app directory check for config data

// TODO: app init function to handle the building of app directory

export function appInit() {
  createDir("save_files", { dir: Dir.App })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });

  readDir("save_files", { dir: Dir.App })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}
// TODO: app migration function for when the app directory is moved
// TODO: Generic save function that specifies the object being saved and the record itself
