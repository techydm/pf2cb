<template>
  <div>
    <!--   Level     -->
    <h1>Level: {{ level }}</h1>
    <!--   Buffs     -->
    <b-dropdown multiple aria-role="list">
      <button class="button is-primary" type="button" slot="trigger">
        <h1>Buffs</h1>
        <b-icon icon="menu-down"></b-icon>
      </button>

      <b-dropdown-item value="option1" aria-role="listitem">
        <span>Option 1</span>
      </b-dropdown-item>

      <b-dropdown-item value="option2" aria-role="listitem">
        <span>Option 2</span>
      </b-dropdown-item>

      <b-dropdown-item value="option3" aria-role="listitem">
        <span>Option 3</span>
      </b-dropdown-item>
    </b-dropdown>
    <!--   Features  -->
    <div>
      <b-field grouped>
        <b-field label="Class Feature" custom-class="has-text-light" expanded>
          <b-field>
            <b-input placeholder="Name" />
            <b-input
              type="textarea"
              minlength="10"
              maxlength="100"
              placeholder="Descripiton"
            >
            </b-input>
            <b-button type="is-success" icon-right="plus" />
          </b-field>
        </b-field>
      </b-field>
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

export default {
  name: "LevelForm",
  setup() {
    const level: Ref<number> = ref(1);

    return { level };
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/styles";
</style>
