<template>
  <div class="ancestry-form-base">
    <!-- Name -->
    <div class="form-field">
      <b-field label="Name" custom-class="has-text-light">
        <b-input v-model="ancestry.name" />
      </b-field>
    </div>
    <!-- HP -->
    <div class="form-field">
      <b-field label="HP" custom-class="has-text-light">
        <b-input v-model="ancestry.hp" type="number" />
      </b-field>
    </div>
    <!-- Size -->
    <b-field label="Primary Ability" custom-class="has-text-light">
      <b-select v-model="ancestry.size">
        <option v-for="size in sizes" :key="size" :value="size">{{
          size
        }}</option>
      </b-select>
    </b-field>
    <!-- Ability Boosts -->
    <b-field label="Ability Boosts" custom-class="has-text-light">
      <BoostInput @add-boost="addBoost" @remove-boost="removeBoost" />
    </b-field>
    <!-- Ability Flaws -->
    <b-field label="Ability Flaws" custom-class="has-text-light">
      <BoostInput @add-boost="addBoost" @remove-boost="removeBoost" />
    </b-field>
    <!-- Languages -->
    <!-- Language Access -->
    <!-- Traits -->
    <!-- Senses -->
    <!-- Heritages -->
  </div>
</template>

<script lang="ts">
import { ref, Ref } from "@vue/composition-api";
import { Ancestry } from "@/shared/types/Ancestry";
import { newAncestry } from "@/services/ancestries";
import BoostInput from "@/components/utility/BoostInput.vue";
import { Boosts } from "@/shared/types/AbilityScores";

interface AncestryFormProps {
  cancel: Function;
}

export default {
  name: "AncestryForm",
  components: { BoostInput },
  props: {
    cancel: {
      type: [Function],
      required: true
    }
  },
  setup(props: AncestryFormProps) {
    const ancestry: Ref<Ancestry> = newAncestry();
    const sizes: Ref<string[]> = ref([
      "tiny",
      "small",
      "medium",
      "large",
      "huge",
      "gargantuan"
    ]);

    function submit() {
      // TODO: make submission
    }

    function close() {
      props.cancel();
    }

    function addBoost(boost: Boosts) {
      console.log(`Adding ${boost}`);
    }

    function removeBoost(boost: Boosts) {
      console.log(`Removing ${boost}`);
    }

    return { ancestry, sizes, submit, close, addBoost, removeBoost };
  }
};
</script>

<style scoped lang="scss"></style>
