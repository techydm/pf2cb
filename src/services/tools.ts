import { ref } from "@vue/composition-api";
import { Tool } from "@/shared/types/tool";

export default function toolList() {
  // List of tools that the user has access to
  const tools = ref([
    new Tool("Character Creation", "/characters", "ra-aura"),
    new Tool("Classes", "/classes", "ra-torch"),
    new Tool("Backgrounds", "/backgrounds", "ra-wooden-sign"),
    new Tool("Feats", "/feats", "ra-player-pyromaniac")
  ]);

  // Setting the last tool to be the settings option
  tools.value.push(new Tool("Settings", "/settings", "ra-book"));

  return { tools };
}
