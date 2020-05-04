<template>
  <div class="center has-text-centered">
    <img width="400" alt="Vue logo" src="../assets/logo.png" />
    <Landing msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";

export default {
  name: "Home",
  components: {
    Landing
  }
};
</script>

<style lang="scss">
.center {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
