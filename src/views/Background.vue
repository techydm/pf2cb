<template>
  <div class="container">
    <h1 class="title has-text-light">Backgrounds</h1>
    <div class="backgrounds-layout">
      <BackgroundCard
        v-for="background in backgrounds"
        :key="background.id"
        :background="background"
      />
    </div>
    <b-button
      type="is-info"
      class="new-button"
      size="is-large"
      @click="isOpen = true"
    >
      <i class="ra ra-forging ra-fw ra-3x" />
    </b-button>
    <!--  Modal  -->
    <b-modal :active.sync="isOpen" :can-cancel="false">
      <div class="background-form-container">
        <BackgroundForm class="background-form" :cancel="close" />
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import BackgroundCard from "@/components/backgrounds/BackgroundCard.vue";
import BackgroundForm from "@/components/backgrounds/BackgroundForm.vue";
import { ref, Ref } from "@vue/composition-api";
import { Background } from "@/shared/types/Backgrounds";
import { getBackgrounds } from "@/services/backgrounds";

export default {
  name: "Background",
  components: {
    BackgroundCard,
    BackgroundForm
  },
  setup() {
    const backgrounds: Ref<Background[]> = getBackgrounds();
    const isOpen: Ref<boolean> = ref(false);

    function close(): void {
      isOpen.value = false;
    }

    return { backgrounds, isOpen, close };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles";

.backgrounds-layout {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  overflow-y: auto;
  margin-bottom: 1rem;
}

.background-form-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.background-form {
  overflow-y: hidden;
  height: 45rem;
  width: 35rem;
  padding: 2rem;
  border-radius: 2rem;
}

.new-button {
  height: 100px;
  width: 100px;
  background-color: $accent;
  margin-left: auto;
  margin-right: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  .backgrounds-layout {
    height: 45rem;
  }
}

@media only screen and (min-width: 600px) {
  .backgrounds-layout {
    height: 50rem;
  }
}
</style>
