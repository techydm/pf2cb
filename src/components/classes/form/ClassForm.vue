<template>
  <div class="cls-base">
    <img class="cls-icon" src="https://picsum.photos/200" alt="" />
    <div class="cls-info">
      <b-field label="Name" custom-class="has-text-light">
        <b-input />
      </b-field>
      <b-field label="Primary Ability" custom-class="has-text-light">
        <b-select />
      </b-field>
      <b-field label="Hp" custom-class="has-text-light">
        <b-input type="number" />
      </b-field>
      <b-radio type="is-info">Require Deity</b-radio>
      <b-field label="Additional Skills" custom-class="has-text-light">
        <b-input type="number" />
      </b-field>
    </div>
    <div class="cls-info">
      <b-field label="Fortitude" custom-class="has-text-light">
        <b-select />
      </b-field>
      <b-field label="Reflex" custom-class="has-text-light">
        <b-select />
      </b-field>
      <b-field label="Will" custom-class="has-text-light">
        <b-select />
      </b-field>
    </div>
    <div class="cls-info">
      <b-field label="Skill Name" custom-class="has-text-light">
        <b-select />
      </b-field>
      <b-field label="Skill Level" custom-class="has-text-light">
        <b-select />
      </b-field>
    </div>
    <div class="cls-info">
      <b-field label="Skill Name" custom-class="has-text-light">
        <b-select />
      </b-field>
      <b-field label="Skill Level" custom-class="has-text-light">
        <b-select />
      </b-field>
    </div>
    <div class="cls-info">
      <b-field label="Skill Name" custom-class="has-text-light">
        <b-select />
      </b-field>
      <b-field label="Skill Level" custom-class="has-text-light">
        <b-select />
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "classForm",
  setup() {
    return {};
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
