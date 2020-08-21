<template>
  <div class="container">
    <h1 class="title has-text-light">Ancestry</h1>
    <div class="ancestry-layout">
      <AncestryCard v-for="ancestry in ancestries" :key="ancestry.id" />
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
      <div class="ancestry-form-container">
        <AncestryForm />
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import AncestryForm from "@/components/ancestry/AncestryForm.vue";
import AncestryCard from "@/components/ancestry/AncestryCard.vue";
import { ref, Ref } from "@vue/composition-api";
import { Ancestry } from "@/shared/types/Ancestry";
import { getAncestries } from "@/services/ancestries";

export default {
  name: "Ancestry",
  components: {
    AncestryForm,
    AncestryCard
  },
  setup() {
    const ancestries: Ref<Ancestry[]> = getAncestries();
    const isOpen: Ref<boolean> = ref(false);

    function close(): void {
      isOpen.value = false;
    }

    return { ancestries, isOpen, close };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles";

.ancestry-layout {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  overflow-y: auto;
  margin-bottom: 1rem;
}

.ancestry-form-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.ancestry-form {
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
  .ancestry-layout {
    height: 45rem;
  }
}

@media only screen and (min-width: 600px) {
  .ancestry-layout {
    height: 50rem;
  }
}
</style>
