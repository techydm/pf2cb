<template>
  <div class="background-base">
    <div><span>Name:</span> {{ background.name }}</div>
    <div>{{ background.description.substring(0, 100) }}...</div>
    <div class="background-tags">
      <span>Boosts: </span>
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
      <span>Skills: </span>
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
      <span>Feats: </span>
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

<style scoped lang="scss">
@import "../../assets/styles";

.background-base {
  height: 15rem;
  width: 45rem;
  padding: 1rem;
  border-radius: 2.5rem;
  background-color: $primary;
}

.background-tags {
  display: flex;
  align-items: center;
}

.background-tag {
  margin: 0.5rem;
}
</style>
