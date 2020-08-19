<template>
  <div>
    <div @click="openModal()" class="background-base">
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
    <!--  Modal  -->
    <b-modal :active.sync="backgroundView">
      <BackgroundView :background="background" />
    </b-modal>
  </div>
</template>

<script lang="ts">
import BackgroundView from "@/components/backgrounds/BackgroundView.vue";
import { Background } from "@/shared/types/Backgrounds";
import { ref, Ref } from "@vue/composition-api";

export default {
  name: "BackgroundCard",
  components: {
    BackgroundView
  },
  props: {
    background: {
      type: [Background],
      required: true
    }
  },
  setup() {
    const backgroundView: Ref<boolean> = ref(false);
    function openModal() {
      backgroundView.value = true;
    }
    return { backgroundView, openModal };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";

.background-base {
  height: 15rem;
  width: 40rem;
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
