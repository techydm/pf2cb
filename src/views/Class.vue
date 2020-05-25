<template>
  <div class="container">
    <h1 class="title has-text-light">Classes</h1>
    <div class="classes-layout">
      <ClassCard class="class-card" />
      <ClassCard class="class-card" />
      <ClassCard class="class-card" />
      <ClassCard class="class-card" />
      <ClassCard class="class-card" />
      <ClassCard class="class-card" />
      <ClassCard class="class-card" />
      <ClassCard class="class-card" />
    </div>
    <b-button
      type="is-info"
      class="new-button"
      size="is-large"
      @click="isOpen = true"
    >
      <i class="ra ra-forging ra-fw ra-3x" />
    </b-button>
    <!--  Modal  -->
    <b-modal full-screen :active.sync="isOpen" :can-cancel="['x']">
      <ClassForm />
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Ref, ref } from "@vue/composition-api";
import ClassCard from "@/components/classes/ClassCard.vue";
import ClassForm from "@/components/classes/form/ClassForm.vue";

export default {
  name: "class",
  components: {
    ClassCard,
    ClassForm
  },
  setup() {
    const isOpen: Ref<boolean> = ref(false);

    return { isOpen };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles";

.class-card {
  margin-top: 2rem;
}

.classes-layout {
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
  .classes-layout {
    height: 45rem;
  }
}

@media only screen and (min-width: 600px) {
  .classes-layout {
    height: 50rem;
  }
}
</style>
