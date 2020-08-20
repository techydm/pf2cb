<template>
  <div class="background-view-base">
    <div class="background-view-text">
      <div class="label has-text-light">
        <span class="is-size-4">Name: </span>
        <span class="is-size-3">{{ background.name }}</span>
      </div>
      <div class="is-size-5">{{ background.description }}</div>
    </div>
    <div class="background-tags">
      <span class="is-size-4 has-text-weight-bold">Boosts: </span>
      <b-tag
        v-for="boost in background.boosts"
        :key="boost"
        class="is-info background-tag"
        size="is-medium"
      >
        {{ boost }}
      </b-tag>
    </div>
    <div class="background-tags">
      <span class="is-size-4 has-text-weight-bold">Skills: </span>
      <b-tag
        v-for="skill in background.skills"
        :key="skill.name"
        class="is-info background-tag"
        size="is-medium"
        aria-close-label="Close tag"
      >
        {{ skill.name }}
      </b-tag>
    </div>
    <div class="background-tags">
      <span class="is-size-4 has-text-weight-bold">Feats: </span>
      <b-tag
        v-for="feat in background.feats"
        :key="feat.name"
        class="is-dark background-tag"
        size="is-medium"
        aria-close-label="Close tag"
      >
        {{ feat.name }}
      </b-tag>
    </div>
    <!--  Action Bar  -->
    <div class="buttons is-right">
      <b-button disabled type="is-info">Edit</b-button>
      <b-button disabled type="is-danger">Delete</b-button>
      <b-button @click="close()" type="is-danger">Close</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Background } from "@/shared/types/Backgrounds";

export default {
  name: "BackgroundView",
  props: {
    background: {
      type: [Background],
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

.background-view-base {
  display: flex;
  flex-flow: column;
  padding: 3rem;
  border-radius: 2.5rem;
  background-color: $primary;

  div {
    margin-bottom: 1rem;
  }
}

.background-view-text {
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
