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
    <div>
      <HeritagesCard
        v-for="heritage in ancestry.heritages"
        :key="heritage.name"
        :heritage="heritage"
      />
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
    <b-modal :active.sync="isHeritageOpen" :can-cancel="false">
      <div class="heritage-form-container">
        <HeritagesForm
          class="heritage-form"
          :heritages="ancestry.heritages"
          :cancel="closeModal"
        />
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from "@vue/composition-api";
import { Ancestry } from "@/shared/types/Ancestry";
import { addAncestry, newAncestry } from "@/services/ancestries";
import BoostInput from "@/components/utility/BoostInput.vue";
import { Boosts } from "@/shared/types/AbilityScores";
import HeritagesForm from "@/components/ancestry/HeritagesForm.vue";
import HeritagesCard from "@/components/ancestry/HeritagesCard.vue";

interface AncestryFormProps {
  cancel: Function;
}

export default {
  name: "AncestryForm",
  components: { HeritagesCard, HeritagesForm, BoostInput },
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

    const isHeritageOpen: Ref<boolean> = ref(false);

    function closeModal() {
      isHeritageOpen.value = false;
    }

    function submit() {
      addAncestry(ancestry.value);
      props.cancel();
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

    return {
      ancestry,
      sizes,
      isHeritageOpen,
      submit,
      close,
      closeModal,
      addBoost,
      removeBoost
    };
  }
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
