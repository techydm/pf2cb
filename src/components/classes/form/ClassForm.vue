<template>
  <div class="cls-base">
    <img class="cls-icon" src="https://picsum.photos/200" alt="" />
    <div class="cls-info">
      <b-field label="Name" custom-class="has-text-light">
        <b-input v-model="cls.name" />
      </b-field>
      <b-field label="Primary Ability" custom-class="has-text-light">
        <b-select v-model="cls.primaryAbility">
          <option v-for="as in ABILITYSCORES" :key="as" :value="as">{{
            as
          }}</option>
        </b-select>
      </b-field>
      <b-field label="Hp" custom-class="has-text-light">
        <b-input v-model="cls.baseHp" type="number" />
      </b-field>
      <b-field label="Require Deity" custom-class="has-text-light">
        <b-radio-button
          v-model="cls.requireDeity"
          native-value="true"
          type="is-success"
        >
          <i class="ra ra-moon-sun ra-fw ra-2x" />
        </b-radio-button>
      </b-field>
      <b-field label="Additional Skills" custom-class="has-text-light">
        <b-input v-model="cls.additionalSkills" type="number" />
      </b-field>
    </div>
    <div class="cls-info">
      <b-field label="Fortitude" custom-class="has-text-light">
        <b-select v-model="cls.savingThrow.fortitude">
          <option v-for="mastery in MASTERY" :key="mastery" :value="mastery">{{
            mastery
          }}</option>
        </b-select>
      </b-field>
      <b-field label="Reflex" custom-class="has-text-light">
        <b-select v-model="cls.savingThrow.reflex">
          <option v-for="mastery in MASTERY" :key="mastery" :value="mastery">{{
            mastery
          }}</option>
        </b-select>
      </b-field>
      <b-field label="Will" custom-class="has-text-light">
        <b-select v-model="cls.savingThrow.will">
          <option v-for="mastery in MASTERY" :key="mastery" :value="mastery">{{
            mastery
          }}</option>
        </b-select>
      </b-field>
    </div>
    <div class="cls-info">
      <b-field grouped>
        <b-field label="Skills" custom-class="has-text-light" expanded>
          <b-field>
            <b-input placeholder="Name" />
            <b-select placeholder="Mastery">
              <option
                v-for="mastery in MASTERY"
                :key="mastery"
                :value="mastery"
                >{{ mastery }}</option
              >
            </b-select>
            <b-button type="is-success" icon-right="plus" />
          </b-field>
        </b-field>
      </b-field>
      <b-field grouped>
        <b-field label="Attacks" custom-class="has-text-light" expanded>
          <b-field>
            <b-input placeholder="Name" />
            <b-select placeholder="Mastery">
              <option
                v-for="mastery in MASTERY"
                :key="mastery"
                :value="mastery"
                >{{ mastery }}</option
              >
            </b-select>
            <b-button type="is-success" icon-right="plus" />
          </b-field>
        </b-field>
      </b-field>
      <b-field grouped>
        <b-field label="Defenses" custom-class="has-text-light" expanded>
          <b-field>
            <b-input placeholder="Name" />
            <b-select placeholder="Mastery">
              <option
                v-for="mastery in MASTERY"
                :key="mastery"
                :value="mastery"
                >{{ mastery }}</option
              >
            </b-select>
            <b-button type="is-success" icon-right="plus" />
          </b-field>
        </b-field>
      </b-field>
    </div>
    <b-button type="is-info" @click="isOpen = true">Spells</b-button>
    <b-modal :active.sync="isOpen" :can-cancel="['outside']">
      <SpellForm
        :cancel="
          () => {
            isOpen = false;
          }
        "
      />
    </b-modal>
    <div>
      {{ cls }}
    </div>
  </div>
</template>

<script lang="ts">
import SpellForm from "@/components/classes/form/SpellForm.vue";
import { ABILITYSCORES, CharacterClass, MASTERY } from "@/shared/types/class";
import { Ref, ref } from "@vue/composition-api";
import { newClass } from "@/services/classes";

export default {
  name: "classForm",
  components: {
    SpellForm
  },
  setup() {
    const cls: Ref<CharacterClass> = newClass();
    const isOpen: Ref<boolean> = ref(false);
    return { cls, ABILITYSCORES, MASTERY, isOpen };
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/styles";

.cls-base {
  border-radius: 2.5rem;
  background-color: $primary;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}

.cls-icon {
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  background-color: $accent;
  border: solid 0.1rem $accent;
  text-align: center;
  margin: 1rem 0 0 1rem;
}

.cls-info {
  margin: 2rem 0 0 2.5rem;
}
</style>
