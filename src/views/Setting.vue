<template>
  <div class="container">
    <h1 class="title has-text-light">Settings</h1>
    <SaveFolder />
    <div>
      <b-button @click="appInit()">Click me</b-button>
    </div>
    <div>
      <b-button @click="saveFile(0, { name: 'Justin', age: 26 })"
        >Save</b-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import SaveFolder from "@/components/settings/SaveFolder.vue";
import { appInit, saveFile } from "@/services/system";

export default {
  name: "setting",
  components: { SaveFolder },
  setup() {
    return { appInit, saveFile };
  }
};
</script>
