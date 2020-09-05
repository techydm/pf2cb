<template>
  <div class="cls-base">
    <img
      class="cls-icon"
      alt="Class Icon"
      src="@/assets/pf2class_icon/druid.png"
    />
    <div class="cls-info">
      <div>Name: {{ cls.name }}</div>
      <div>Primary Ability: {{ cls.primaryAbility }}</div>
      <div>Hp: {{ cls.baseHp }}</div>
      <div>Spellcaster: {{ cls.spellSlots.length > 0 }}</div>
    </div>
    <!--  Modal  -->
    <b-modal :active.sync="classView" :can-cancel="false">
      <ClassView :cls="cls" :close="closeModal" />
    </b-modal>
  </div>
</template>

<script lang="ts">
import { CharacterClass } from "@/shared/types/Class";
import ClassView from "@/components/classes/ClassView.vue";
import { Ref, ref } from "@vue/composition-api";

export default {
  name: "classCard",
  props: {
    cls: {
      type: [CharacterClass],
      required: true
    }
  },
  components: {
    ClassView
  },
  setup() {
    const classView: Ref<boolean> = ref(false);
    function openModal() {
      classView.value = true;
    }
    function closeModal() {
      classView.value = false;
    }

    return {
      classView,
      openModal,
      closeModal
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";

.cls-base {
  height: 10rem;
  width: 40rem;
  border-radius: 2.5rem;
  background-color: $primary;
  display: flex;
  flex-flow: row;
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
