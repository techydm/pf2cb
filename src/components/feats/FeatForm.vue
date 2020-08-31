<template>
  <div class="ancestry-form-base">
    <div class="ancestry-form-inputs">
      <!--  General Info  -->
      <div>
        <!-- Name -->
        <div class="form-field">
          <b-field label="Name" custom-class="has-text-light">
            <b-input v-model="feat.name" />
          </b-field>
        </div>
</template>

<script>
import { Ref, ref } from "@vue/composition-api";
//import { Feat } from "@/shared/types/Feat";
import FeatForm from "/componebts/feats/Featform.vue";
import FeatCard from "/componebts/feats/FeatCard.vue";

export default {
  name: "FeatForm",
  props: {
    cancel: {
      type: [Function],
      required: true
    }
  
}

//const isFeatOpen: Ref<boolean> = ref(false);
}
</script>

<style scoped lang="scss">
@import "../../../assets/styles";

.cls-base {
  height: 100%;
  background-color: $primary;
  padding: 1rem;
}

.cls-inputs {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}

.cls-icon {
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  background-color: $primary;
  border: solid 0.1rem $accent;
  text-align: center;
  margin: 1rem 0 0 1rem;
}

.cls-info {
  margin: 2rem 0 0 2.5rem;
}
</style>