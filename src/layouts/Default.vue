<template>
  <div>
    <div class="layout">
      <div class="side-nav">
        <SideNav />
      </div>
      <div class="page">
        <slot />
      </div>
      <div class="bottom-nav">
        <SideNav />
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

@media only screen and (max-width: 600px) {
  .layout {
    flex-direction: column;
  }

  .side-nav {
    display: none;
  }

  .bottom-nav {
    display: flex;
  }
}

@media only screen and (min-width: 600px) {
  .layout {
    flex-direction: row;
  }

  .side-nav {
    display: flex;
  }

  .bottom-nav {
    display: none;
  }
}
</style>
