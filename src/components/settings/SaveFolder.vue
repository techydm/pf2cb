<template>
  <b-field custom-class="has-text-light" label="Save Folder">
    <b-field>
      <b-input v-model="appDir" placeholder="Directory..." type="search" />
      <p class="control">
        <b-button class="button is-primary" @click="openDialog()">
          Select
        </b-button>
      </p>
    </b-field>
  </b-field>
</template>

<script lang="ts">
import { ref, Ref } from "@vue/composition-api";
import { open } from "tauri/api/dialog";
import { getAppDir } from "@/services/system";

export default {
  name: "SaveFolder",
  setup() {
    const appDir: Ref<any> = getAppDir();

    function openDialog() {
      open({ directory: true, multiple: false }).then(filepath => {
        appDir.value = filepath;
      });
    }

    return { appDir, openDialog };
  }
};
</script>
