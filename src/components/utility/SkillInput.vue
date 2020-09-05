<template>
  <div>
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
          <b-button type="is-success" icon-right="plus" @click="addSkill()" />
        </b-field>
      </b-field>
    </b-field>
    <div>
      <b-tag
        v-for="skill in skills"
        :key="skill.name"
        closable
        @close="removeSkill(skill.name)"
        class="is-dark"
        size="is-medium"
        aria-close-label="Close tag"
      >
        {{ skill.name }}
      </b-tag>
    </div>
  </div>
</template>

<script lang="ts">
import { MASTERY } from "@/shared/types/Mastery";
import { ref, Ref } from "@vue/composition-api";
import { Skill } from "@/shared/types/Skills";

interface SkillProps {
  skills: Skill[];
}

export default {
  name: "SkillInput",
  props: {
    skills: {
      type: [Array],
      required: true
    }
  },
  setup(props: SkillProps, { emit }: any) {
    const skill: Ref<Skill> = ref(new Skill());

    function addSkill() {
      emit("add-skill", skill.value);
      skill.value = new Skill();
    }

    function removeSkill(skillName: string) {
      emit("remove-skill", skillName);
    }

    return { skill, MASTERY, addSkill, removeSkill };
  }
};
</script>
