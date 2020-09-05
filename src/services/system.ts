import {
  BaseDirectory,
  createDir,
  Dir,
  readDir,
  readTextFile,
  writeFile
} from "tauri/api/fs";
import { Ref, ref } from "@vue/composition-api";

class SystemConfig {
  version: string = "";
  appDir: string = "";
}

export enum FileTypes {
  Class = 0,
  Background = 1,
  Ancestry = 2,
  Feat = 3,
  Character = 4,
  Spell = 5
}

const Files = [
  { fileType: 0, defaultValues: "[]" },
  { fileType: 1, defaultValues: "[]" },
  { fileType: 2, defaultValues: "[]" },
  { fileType: 3, defaultValues: "[]" },
  { fileType: 4, defaultValues: "[]" },
  { fileType: 5, defaultValues: "[]" }
];

// Store
const appDirectory: Ref<string> = ref("");

// Internal function
async function checkAppDir(): Promise<void> {
  if (appDirectory.value !== "") {
    await readDir(appDirectory.value).catch(err => {
      throw err;
    });
  } else {
    await readDir("pf2cb", { dir: Dir.Home }).catch(err => {
      throw err;
    });
  }
}

function getFileName(fileType: FileTypes): string {
  switch (fileType) {
    case FileTypes.Class:
      return "classes.json";
    case FileTypes.Background:
      return "backgrounds.json";
    case FileTypes.Ancestry:
      return "ancestries.json";
    case FileTypes.Feat:
      return "feats.json";
    case FileTypes.Character:
      return "characters.json";
    case FileTypes.Spell:
      return "spells.json";
  }
}

async function getFileData(fileType: FileTypes): Promise<string> {
  const fileName = getFileName(fileType);
  if (appDirectory.value !== "") {
    return await readTextFile(`${appDirectory.value}/${fileName}`).catch(
      err => {
        console.error(err.toString());
        throw err;
      }
    );
  } else {
    return await readTextFile(`pf2cb/${fileName}`, {
      dir: BaseDirectory.Home
    }).catch(err => {
      console.error(err.toString());
      throw err;
    });
  }
}

async function writeFileData(
  fileName: string,
  contents: string
): Promise<void> {
  if (appDirectory.value !== "") {
    writeFile({ path: `${appDirectory.value}/${fileName}`, contents }).catch(
      err => {
        console.error(err.toString());
      }
    );
    return;
  } else {
    writeFile(
      { path: `pf2cb/${fileName}`, contents },
      { dir: BaseDirectory.Home }
    ).catch(err => {
      console.error(err.toString());
    });
    return;
  }
}

// External functions
export async function appInit(): Promise<void> {
  // Get the app configs
  const configsJSON = await readTextFile("pf2cb/setting.json", {
    dir: Dir.Config
  }).catch(async () => {
    // Build the setting object
    const settings = new SystemConfig();
    settings.version = "0.1";
    settings.appDir = "";

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

  // Set the app directory
  appDirectory.value = JSON.parse(configsJSON).appDir;

  // Check app directory to see if it has all files
  await checkAppDir().catch(async () => {
    // Build the app directory
    await createDir("pf2cb", { dir: Dir.Home }).catch(err => {
      console.error(err.toString());
    });
  });

  // Create empty application files for future use
  Files.map(async file => {
    await getFileData(file.fileType).catch(() => {
      const fileName = getFileName(file.fileType);
      writeFileData(fileName, file.defaultValues);
    });
  });
}

export function getAppDir(): Ref<string> {
  return appDirectory;
}

// TODO: app migration function for when the app directory is moved
// export async function appMigration(filePath: string): Promise<void> {}

export async function saveFile(
  fileType: FileTypes,
  content: any
): Promise<void> {
  // Get current content if exists
  let contentsJSON: string = await getFileData(fileType);

  const contents: any[] = JSON.parse(contentsJSON);
  contents.push(content);

  contentsJSON = JSON.stringify(contents);

  // Write full content to file system
  const fileName = getFileName(fileType);
  await writeFileData(fileName, contentsJSON);
}
