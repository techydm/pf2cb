<template>
  <div class="has-background-primary">
    <!--   Level     -->
    <h1>Level: {{ level }}</h1>
    <!--   Buffs     -->
    <b-dropdown multiple aria-role="list">
      <button class="button is-primary" type="button" slot="trigger">
        <h1>Buffs</h1>
        <b-icon icon="menu-down"></b-icon>
      </button>
      <b-dropdown-item
        v-for="buff in BUFFS"
        :key="buff"
        :value="buff"
        aria-role="listitem"
      >
        <span>{{ buff }}</span>
      </b-dropdown-item>
    </b-dropdown>
    <!--   Features  -->
    <div class="feature">
      <div>Class Feature</div>
      <b-input placeholder="Name" />
      <b-input
        type="textarea"
        minlength="10"
        maxlength="100"
        placeholder="Descripiton"
      />
      <b-button type="is-success" icon-right="plus" />
    </div>
    <!--   Buttons   -->
    <div class="buttons">
      <b-button type="is-success">Submit</b-button>
      <b-button type="is-danger">Cancel</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, ref } from "@vue/composition-api";
import { BUFFS } from "@/shared/types/class";

export default {
  name: "LevelForm",
  setup() {
    const level: Ref<number> = ref(1);

    return { level, BUFFS };
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/styles";
.feature {
  display: flex;
  flex-flow: nowrap column;
  width: 40%;
}
</style>
