<template>
  <!--Dsiplaying all the feat data -->
  <div class="feat-view-base">
    <!--name--->
    <div class="feat-view-text">
      <span class="has-text-weight-bold">Name: </span>
      {{ feat.name }}
    </div>
    <!--tags--->
    <div class="feat-tags">
      <span class="has-text-weight-bold">Tags: </span>
      <b-tag
        v-for="type in feat.type"
        :key="type"
        class="is-info feat-card-tag"
        size="is-medium"
        aria-close-label="Close tag"
      >
        {{ type }}
      </b-tag>
    </div>
    <!--description--->
    <div class="feat-view-text">
      <span class="has-text-weight-bold">Description: </span>
      {{ feat.description }}
    </div>
    <div class="buttons is-right">
      <b-button disabled type="is-info">Edit</b-button>
      <b-button disabled type="is-danger">Delete</b-button>
      <b-button @click="close()" type="is-danger">Close</b-button>
    </div>
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

.feat-tags {
  display: flex;
  align-items: center;
}

.feat-tag {
  margin: 0.5rem;
}
</style>
