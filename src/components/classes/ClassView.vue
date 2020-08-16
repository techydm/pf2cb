<template>
  <div>
    <!--  Class Details  -->
    <div>
      <div>Name: {{ cls.name }}</div>
      <div>Primary Ability: {{ cls.primaryAbility }}</div>
      <div>Hp: {{ cls.baseHp }}</div>
      <div>Spellcaster: {{ cls.spellSlots.length > 0 }}</div>
    </div>
    <!--  Spell Progression  -->
    <SpellForm view-mode />
    <!--  Level Table  -->
    <LevelTable view-mode />
    <!--  Action Bar  -->
    <div class="buttons">
      <b-button type="is-info">Edit</b-button>
      <b-button @click="cancel()" type="is-danger">Cancel</b-button>
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

<style scoped></style>
