<template>
  <div>
    <div @click="openModal()" class="background-base">
      <div class="background-text">
        <div class="background-text-name is-size-5 has-text-weight-bold">
          {{ ancestry.name }}
        </div>
      </div>
      <div class="background-tags">
        <span class="is-size-5 has-text-weight-bold">Boosts: </span>
        <b-tag
          v-for="boost in ancestry.abilityBoosts"
          :key="boost"
          class="is-info background-tag"
          size="is-medium"
        >
          {{ boost }}
        </b-tag>
      </div>
      <div class="background-tags">
        <span class="is-size-5 has-text-weight-bold">Flaws: </span>
        <b-tag
          v-for="flaw in ancestry.abilityFlaws"
          :key="flaw"
          class="is-info background-tag"
          size="is-medium"
        >
          {{ flaw }}
        </b-tag>
      </div>
      <!--  Modal  -->
      <b-modal :active.sync="ancestryView" :can-cancel="false">
        <AncestryView :ancestry="ancestry" :close="closeModal" />
      </b-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { Ancestry } from "@/shared/types/Ancestry";
import AncestryView from "@/components/ancestry/AncestryView.vue";
import { ref, Ref } from "@vue/composition-api";

export default {
  name: "AncestryCard",
  components: { AncestryView },
  props: {
    ancestry: {
      type: [Ancestry],
      required: true
    }
  },
  setup() {
    const ancestryView: Ref<boolean> = ref(false);
    function openModal() {
      ancestryView.value = true;
    }
    function closeModal() {
      ancestryView.value = false;
    }
    return { ancestryView, openModal, closeModal };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";

.background-base {
  height: 17rem;
  width: 40rem;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 2.5rem;
  background-color: $primary;
}

.background-text {
  margin-bottom: 1rem;
}

.background-text-name {
  margin-bottom: 1rem;
}

.background-tags {
  display: flex;
  align-items: center;
}

.background-tag {
  margin: 0.5rem;
}
</style>
