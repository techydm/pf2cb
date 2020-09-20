import { invoke } from "tauri/api/tauri";

export function databaseTest() {
  invoke({ cmd: "myCustomCommand", argument: "Hello World" });
}
