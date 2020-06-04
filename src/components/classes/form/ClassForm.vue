<template>
  <div class="cls-base">
    <div class="cls-inputs">
      <!--  Icon  -->
      <img class="cls-icon" src="https://picsum.photos/200" alt="" />
      <!--  General Info  -->
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
      <!--  Saving Throws  -->
      <div class="cls-info">
        <b-field label="Fortitude" custom-class="has-text-light">
          <b-select v-model="cls.savingThrow.fortitude">
            <option
              v-for="mastery in MASTERY"
              :key="mastery"
              :value="mastery"
              >{{ mastery }}</option
            >
          </b-select>
        </b-field>
        <b-field label="Reflex" custom-class="has-text-light">
          <b-select v-model="cls.savingThrow.reflex">
            <option
              v-for="mastery in MASTERY"
              :key="mastery"
              :value="mastery"
              >{{ mastery }}</option
            >
          </b-select>
        </b-field>
        <b-field label="Will" custom-class="has-text-light">
          <b-select v-model="cls.savingThrow.will">
            <option
              v-for="mastery in MASTERY"
              :key="mastery"
              :value="mastery"
              >{{ mastery }}</option
            >
          </b-select>
        </b-field>
      </div>
      <!--  Skills  -->
      <div class="cls-info">
        <b-field grouped>
          <b-field label="Skills" custom-class="has-text-light" expanded>
            <b-field>
              <b-input v-model="skill.name" placeholder="Name" />
              <b-select v-model="skill.level" placeholder="Mastery">
                <option
                  v-for="mastery in MASTERY"
                  :key="mastery"
                  :value="mastery"
                  >{{ mastery }}</option
                >
              </b-select>
              <b-button
                type="is-success"
                icon-right="plus"
                @click="addSkills('skill')"
              />
            </b-field>
          </b-field>
        </b-field>
        <b-field grouped>
          <b-field label="Attacks" custom-class="has-text-light" expanded>
            <b-field>
              <b-input v-model="attack.name" placeholder="Name" />
              <b-select v-model="attack.level" placeholder="Mastery">
                <option
                  v-for="mastery in MASTERY"
                  :key="mastery"
                  :value="mastery"
                  >{{ mastery }}</option
                >
              </b-select>
              <b-button
                type="is-success"
                icon-right="plus"
                @click="addSkills('attack')"
              />
            </b-field>
          </b-field>
        </b-field>
        <b-field grouped>
          <b-field label="Defenses" custom-class="has-text-light" expanded>
            <b-field>
              <b-input v-model="defense.name" placeholder="Name" />
              <b-select v-model="defense.level" placeholder="Mastery">
                <option
                  v-for="mastery in MASTERY"
                  :key="mastery"
                  :value="mastery"
                  >{{ mastery }}</option
                >
              </b-select>
              <b-button
                type="is-success"
                icon-right="plus"
                @click="addSkills('defense')"
              />
            </b-field>
          </b-field>
        </b-field>
      </div>
      <!--  Spells  -->
      <div class="cls-info">
        <b-button type="is-info" @click="isOpen = true">Spells</b-button>
        <b-modal :active.sync="isOpen" :can-cancel="false">
          <SpellForm :cancel="close" />
        </b-modal>
      </div>
      <!--  Levels  -->
      <div class="cls-info">
        <LevelTable />
      </div>
      <!--  Temp: Class Info  -->
      <div>
        {{ cls }}
      </div>
    </div>
    <!--  Action Buttons  -->
    <div class="buttons is-pulled-right">
      <b-button type="is-success">Submit</b-button>
      <b-button @click="cancel()" type="is-danger">Cancel</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import SpellForm from "@/components/classes/form/SpellForm.vue";
import LevelTable from "@/components/classes/LevelTable.vue";
import {
  ABILITYSCORES,
  CharacterClass,
  MASTERY,
  Skill
} from "@/shared/types/class";
import { Ref, ref } from "@vue/composition-api";
import { addAttack, addDefense, addSkill, newClass } from "@/services/classes";

interface ClassFormProps {
  cancel: Function;
}

export default {
  name: "classForm",
  components: {
    SpellForm,
    LevelTable
  },
  props: {
    cancel: {
      type: [Function],
      required: true
    }
  },
  setup() {
    const cls: Ref<CharacterClass> = newClass();
    const isOpen: Ref<boolean> = ref(false);

    const skill: Ref<Skill> = ref(new Skill());
    const attack: Ref<Skill> = ref(new Skill());
    const defense: Ref<Skill> = ref(new Skill());

    function addSkills(type: string) {
      switch (type) {
        case "skill": {
          addSkill(skill.value);
          skill.value = new Skill();
          break;
        }
        case "attack": {
          addAttack(attack.value);
          attack.value = new Skill();
          break;
        }
        case "defense": {
          addDefense(defense.value);
          defense.value = new Skill();
          break;
        }
      }
    }

    function close() {
      isOpen.value = false;
    }

    return {
      cls,
      ABILITYSCORES,
      MASTERY,
      isOpen,
      skill,
      attack,
      defense: defense,
      addSkills,
      close
    };
  }
};
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
  background-color: $accent;
  border: solid 0.1rem $accent;
  text-align: center;
  margin: 1rem 0 0 1rem;
}

.cls-info {
  margin: 2rem 0 0 2.5rem;
}
</style>
