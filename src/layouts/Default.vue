<template>
  <div>
    <div class="layout">
      <SideNav />
      <div class="page">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/layout/SideNav";
export default {
  name: "Default",
  components: {
    SideNav
  }
};
</script>

<style lang="scss">
// Import custom Bulma styles
@import "../assets/styles";

html,
body {
  overflow-y: hidden;
}

.layout {
  font-family: "Nunito", Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
  background-color: $dark;
  display: flex;
  color: $light;
}

.page {
  flex-grow: 1;
  padding-top: 20px;
  overflow-scrolling: auto;
  overflow-y: auto;
}
</style>
