<template>
  <div class="cls.base">
    <h1>FeatformPage</h1>
    <!-- <div class="cls.inputs"></div> -->
  </div>
</template>

<script>
import { Ref, ref } from "@vue/composition-api";

export default {
  name: "FeatForm",
  props: {
    cancel: {
      type: [Function],
      required: true
    }
  }
};
</script>

<!--Styling which was copied from ClassForm-->
<style scoped lang="scss">
@import "../../../assets/styles";

.cls-base {
  height: 100%;
  background-color: $primary;
  padding: 1rem;
}

.cls-inputs {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
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
