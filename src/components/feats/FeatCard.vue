<template>
  <div>
    <div @click="openModal()" class="feat-card-base">
      <div class="feat-card-text">
        <div class="fead-card-text-name is-size-5 has-text-weight-bold">
          {{ feat.name }}
        </div>
      </div>
      <div class="feat-tags">
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
      <div class="feat-card-text">
        <div class="fead-card-text-name is-size-5">
          {{ feat.description.substring(0, 100) }}...
        </div>
      </div>
    </div>
    <!--  Modal -->
    <b-modal :active.sync="featView" :can-cancel="false">
      <FeatView :feat="feat" :close="closeModal" />
    </b-modal>
  </div>
</template>

<script lang="ts">
import FeatView from "@/components/feats/FeatView.vue";
import { Feat } from "@/shared/types/feat";
import { ref, Ref } from "@vue/composition-api";

export default {
  name: "FeatCard",
  components: {
    FeatView
  },
  props: {
    feat: {
      type: [Feat],
      required: true
    }
  },
  setup() {
    const featView: Ref<boolean> = ref(false);
    function openModal() {
      featView.value = true;
    }
    function closeModal() {
      featView.value = false;
    }

    return { featView, openModal, closeModal };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";

.feat-card-base {
  height: 17rem;
  width: 40rem;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 2.5rem;
  margin-bottom: 1rem;
  background-color: $primary;
}

.feat-card-text {
  margin-bottom: 1rem;
}

.feat-card-text-name {
  margin-bottom: 1rem;
}

.feat-card-tags {
  display: flex;
  align-items: center;
}

.feat-card-tag {
  margin: 0.5rem;
}
</style>
