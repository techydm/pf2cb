<template>
  <div class="cls-base">
    <img class="cls-icon" src="https://picsum.photos/200" alt="" />
    <div class="cls-info">
      <div>Name:</div>
      <div>Primary Ability:</div>
      <div>Hp:</div>
      <div>Spellcaster:</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "classCard",
  props: ["cls"],
  setup() {
    return {};
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
  background-color: $accent;
  border: solid 0.1rem $accent;
  text-align: center;
  margin: 1rem 0 0 1rem;
}

.cls-info {
  margin: 2rem 0 0 2.5rem;
}
</style>
