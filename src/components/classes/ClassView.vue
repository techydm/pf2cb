<template>
  <div class="display-base">
    <!--  Class Details  -->
    <div class="display-class-details">
      <div class="label has-text-light is-size-3">
        <span class="has-text-weight-bold">Name: </span>
        <span class="is-capitalized has-text-weight-normal">{{
          cls.name
        }}</span>
      </div>
      <div class="label has-text-light is-size-4">
        <span class="has-text-weight-bold">Primary Ability: </span>
        <span class="is-capitalized has-text-weight-normal">{{
          cls.primaryAbility
        }}</span>
      </div>
      <div class="label has-text-light is-size-4">
        <span class="has-text-weight-bold">Hp: </span>
        <span class="is-capitalized has-text-weight-normal">{{
          cls.baseHp
        }}</span>
      </div>
    </div>
    <!--  Spell Progression  -->
    <SpellForm v-show="cls.spellSlots.length > 0" view-mode />
    <!--  Level Table  -->
    <div class="display-level-table">
      <LevelTable view-mode />
    </div>
    <!--  Action Bar  -->
    <div class="buttons is-right">
      <b-button disabled type="is-info">Edit</b-button>
      <b-button disabled type="is-danger">Delete</b-button>
      <b-button @click="close()" type="is-danger">Close</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { CharacterClass } from "@/shared/types/class";
import LevelTable from "@/components/classes/LevelTable.vue";
import SpellForm from "@/components/classes/form/SpellForm.vue";

export default {
  name: "ClassView",
  props: {
    cls: {
      type: [CharacterClass],
      required: true
    },
    close: {
      type: [Function],
      required: true
    }
  },
  components: {
    SpellForm,
    LevelTable
  },
  setup() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";

.display-base {
  padding: 3rem;
  border-radius: 2.5rem;
  background-color: $primary;
  display: flex;
  flex-flow: column;
}

.display-class-details {
  margin-bottom: 2rem;
}

.display-level-table {
  margin-bottom: 2rem;
}
</style>
