<template>
  <div class="container">
    <h1 class="title has-text-light">Backgrounds</h1>
    <div class="backgrounds-layout"></div>
    <b-button
      type="is-info"
      class="new-button"
      size="is-large"
      @click="isOpen = true"
    >
      <i class="ra ra-forging ra-fw ra-3x" />
    </b-button>
    <!--  Modal  -->
    <b-modal full-screen :active.sync="isOpen" :can-cancel="false"> </b-modal>
  </div>
</template>

<script lang="ts">
export default {
  name: "Background"
};
</script>

<style scoped lang="scss">
@import "../assets/styles";

.backgrounds-layout {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  overflow-y: auto;
  margin-bottom: 1rem;
}

.new-button {
  height: 100px;
  width: 100px;
  background-color: $accent;
  margin-left: auto;
  margin-right: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  .backgrounds-layout {
    height: 45rem;
  }
}

@media only screen and (min-width: 600px) {
  .backgrounds-layout {
    height: 50rem;
  }
}
</style>
