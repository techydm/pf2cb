<template>
  <div>
    <b-field label="Name" custom-class="has-text-light">
      <b-input v-model="background.name" />
    </b-field>
  </div>
</template>

<script lang="ts">
import { Ref } from "@vue/composition-api";
import { Background } from "@/shared/types/Backgrounds";
import { newBackground } from "@/services/backgrounds";

interface BackgroundFormProps {
  cancel: Function;
}

export default {
  name: "BackgroundForm",
  props: {
    cancel: {
      type: [Function],
      required: true
    }
  },
  setup(props: BackgroundFormProps) {
    const background: Ref<Background> = newBackground();

    function close() {
      props.cancel();
    }

    return { background, close };
  }
};
</script>

<style scoped></style>
