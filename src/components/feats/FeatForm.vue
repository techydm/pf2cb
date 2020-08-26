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
        <!-- Description-->
        <b-field label="Size" custom-class="has-text-light">
          <b-select v-model="ancestry.size">
            <option v-for="size in sizes" :key="size" :value="size">{{
              size
            }}</option>
          </b-select>
        </b-field>
      <!--  Tags  -->
      <div>
        <!-- Languages -->
        <div class="form-field">
          <b-field label="Languages" custom-class="has-text-light">
            <b-taginput
              v-model="ancestry.languages"
              ellipsis
              icon="label"
              placeholder="Add a language"
            >
            </b-taginput>
          </b-field>
        </div>
        <!-- Language Access -->
        <div class="form-field">
          <b-field label="Languages Access" custom-class="has-text-light">
            <b-taginput
              v-model="ancestry.languagesAccess"
              ellipsis
              icon="label"
              placeholder="Add possible languages"
            >
            </b-taginput>
          </b-field>
        </div>
    <!--  Action Buttons  -->
    <div class="buttons is-pulled-right">
      <b-button @click="isHeritageOpen = true" type="is-info"
        >Add Heritage</b-button
      >
      <b-button @click="submit()" type="is-success">Submit</b-button>
      <b-button @click="close()" type="is-danger">Cancel</b-button>
    </div>
    <!--  Heritage Modal  -->
    <b-modal :active.sync="isFeatOpen" :can-cancel="false">
      <div class="feat-form-container">
        <FeatForm
          class="feat-form"
          :cancel="closeModal"
        />
      </div>
    </b-modal>
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