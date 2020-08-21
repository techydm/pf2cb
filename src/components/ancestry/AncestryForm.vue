<template>
  <div class="ancestry-form-base">
    <div class="ancestry-form-inputs">
      <!--  General Info  -->
      <div>
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
        <b-field label="Size" custom-class="has-text-light">
          <b-select v-model="ancestry.size">
            <option v-for="size in sizes" :key="size" :value="size">{{
              size
            }}</option>
          </b-select>
        </b-field>
      </div>
      <!--  Boosts and Flaws  -->
      <div>
        <!-- Ability Boosts -->
        <div class="form-field">
          <b-field label="Ability Boosts" custom-class="has-text-light">
            <BoostInput @add-boost="addBoost" @remove-boost="removeBoost" />
          </b-field>
        </div>
        <!-- Ability Flaws -->
        <div class="form-field">
          <b-field label="Ability Flaws" custom-class="has-text-light">
            <BoostInput @add-boost="addBoost" @remove-boost="removeBoost" />
          </b-field>
        </div>
      </div>
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
        <!-- Traits -->
        <div class="form-field">
          <b-field label="Traits" custom-class="has-text-light">
            <b-taginput
              v-model="ancestry.traits"
              ellipsis
              icon="label"
              placeholder="Add Traits"
            >
            </b-taginput>
          </b-field>
        </div>
        <!-- Senses -->
        <div class="form-field">
          <b-field label="Senses" custom-class="has-text-light">
            <b-taginput
              v-model="ancestry.senses"
              ellipsis
              icon="label"
              placeholder="Add senses"
            >
            </b-taginput>
          </b-field>
        </div>
      </div>
    </div>
    <!-- Heritages -->
    <div></div>
    <!--  Action Buttons  -->
    <div class="buttons is-pulled-right">
      <b-button @click="submit()" type="is-success">Submit</b-button>
      <b-button @click="close()" type="is-danger">Cancel</b-button>
    </div>
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

<style scoped lang="scss">
@import "../../assets/styles";

.ancestry-form-base {
  height: 100%;
  width: 55rem;
  background-color: $primary;
}

.ancestry-form-inputs {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.form-field {
  margin-bottom: 2rem;
}
</style>
