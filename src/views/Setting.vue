<template>
  <div class="container setting-page">
    <div>
      <div class="title has-text-light">Setting</div>
      <div>Directory: {{ appDir }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAppDir } from "@/services/system";

export default {
  name: "setting",
  setup() {
    const appDir = getAppDir();
    return { appDir };
  }
};
</script>

<style lang="scss">
.setting-page {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
