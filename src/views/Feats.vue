<template>
  <div class="container">
    <h1 class="title has-text-light">Feats</h1>
    <div>
      <h2>Placeholder for the feat cards</h2>
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
    <b-modal full-screen :active.sync="isOpen" :can-cancel="false">
      <FeatForm :cancel="close" />
    </b-modal>
  </div>
</template>

<script lang="ts">
import FeatForm from "@/components/feats/FeatForm.vue";
//import FeatCard
import { Feat } from "@/shared/types/feat";
import { getFeat } from "@/services/feats";
import { ref, Ref } from "@vue/composition-api";
export default {
  name: "feats",
  components: {
    FeatForm
  },
  setup() {
    const feats: Ref<Feat[]> = getFeat();
    const isOpen: Ref<boolean> = ref(false);

    function close() {
      isOpen.value = false;
    }

    return { isOpen, close };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles";

.class-card {
  margin-top: 2rem;
}

.classes-layout {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  overflow-y: auto;
  margin-bottom: 1rem;
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
</style>
