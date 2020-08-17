<template>
  <div>
    <div>{{ background.name }}</div>
    <div>{{ background.description }}</div>
    <div>{{ background.boosts }}</div>
    <div>{{ background.skills }}</div>
    <div>{{ background.feats }}</div>
  </div>
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
