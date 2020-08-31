<template>
  <div class="container">
    <h1>This is a placeholder</h1>
    <!-- Name -->
    <div class="form-field">
      <b-field label="Name" custom-class="has-text-light">
        <b-input v-model="feat.name" />
      </b-field>
    </div>
  </div>
</template>

<script>
import { Ref, ref } from "@vue/composition-api";
import { Feat } from "@/shared/types/feat";
//import FeatForm from "/componebts/feats/Featform.vue";
//import FeatCard from "/componebts/feats/FeatCard.vue";

export default {
  name: "FeatForm",
  props: {
    cancel: {
      type: [Function],
      required: true
    }
  }

  //const isFeatOpen: Ref<boolean> = ref(false);
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";

.ancestry-form-base {
  height: 100%;
  background-color: $primary;
}

.ancestry-form-inputs {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.heritage-form-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.heritage-form {
  overflow-y: hidden;
  width: 55rem;
  padding: 2rem;
  border-radius: 2rem;
}

.form-field {
  display: flex;
  flex-flow: row wrap;
  max-width: 15rem;
  margin-bottom: 2rem;
}
</style>
