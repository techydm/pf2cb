<template>
  <div></div>
</template>

<script lang="ts">
import { Background } from "@/shared/types/Backgrounds";

export default {
  name: "BackgroundCard",
  props: {
    background: {
      type: [Background],
      required: true
    }
  },
  setup() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
