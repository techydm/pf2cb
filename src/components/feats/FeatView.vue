<template>
  <!--Dsiplaying all the feat data -->
  <div>
    <h1>Placeholder</h1>
  </div>
</template>

<script lang="ts">
import { Feat } from "@/shared/types/feat";

export default {
  name: "FeatView",
  props: {
    feat: {
      type: [Feat],
      required: true
    },
    close: {
      type: [Function],
      required: true
    }
  },
  setup() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";

.feat-view-base {
  display: flex;
  flex-flow: column;
  padding: 3rem;
  border-radius: 2.5rem;
  background-color: $primary;

  div {
    margin-bottom: 1rem;
  }
}

.feat-view-text {
  margin-bottom: 3rem;
}

.background-tags {
  display: flex;
  align-items: center;
}

.background-tag {
  margin: 0.5rem;
}
</style>
