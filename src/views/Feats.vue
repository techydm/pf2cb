<template>
  <div class="container">
    <h1 class="title has-text-light">Feats</h1>
    <div class="feat-layout">
      <FeatCard v-for="feat in feats" :key="feat.id" :feat="feat" />
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
      <div class="feat-form-container">
        <FeatForm class="feat-form" :cancel="close" />
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Feat } from "@/shared/types/Feat";
import FeatForm from "@/components/feats/FeatForm.vue";
import FeatCard from "@/components/feats/FeatCard.vue";
import { getFeat } from "@/services/feats";
import { ref, Ref } from "@vue/composition-api";
export default {
  name: "feats",
  components: {
    FeatCard,
    FeatForm
  },
  setup() {
    const feats: Ref<Feat[]> = getFeat();
    const isOpen: Ref<boolean> = ref(false);

    function close(): void {
      isOpen.value = false;
    }

    return { feats, isOpen, close };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles";

.feat-form-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.feat-form {
  overflow-y: hidden;
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

.feats-layout {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  overflow-y: auto;
  margin-bottom: 1rem;
}

@media only screen and (max-width: 600px) {
  .feats-layout {
    height: 45rem;
  }
}

@media only screen and (min-width: 600px) {
  .feats-layout {
    height: 50rem;
  }
}
</style>
