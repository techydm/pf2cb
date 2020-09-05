<template>
  <div class="heritage-card-base">
    <div class="is-size-4">{{ heritage.name }}</div>
    <div class="heritage-card-content">
      {{ heritage.description.substring(0, 100) }}
    </div>
  </div>
</template>

<script lang="ts">
import { Heritage } from "@/shared/types/Heritage";

export default {
  name: "HeritagesCard",
  props: {
    heritage: {
      type: [Heritage],
      required: true
    },
    viewMode: {
      type: [Boolean],
      default: false
    }
  },
  setup() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";

.heritage-card-base {
  background-color: $dark;
  max-width: 20rem;
  padding: 1rem;
  border-radius: 2.5rem;
}

.heritage-card-content {
  text-align: center;
}
</style>
