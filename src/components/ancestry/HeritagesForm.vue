<template>
  <div class="heritage-form-base">
    <!--   Name   -->
    <div class="form-field">
      <b-field label="Name" custom-class="has-text-light">
        <b-input v-model="heritage.name" />
      </b-field>
    </div>
    <!--   Description   -->
    <div class="form-field">
      <b-field label="Description" custom-class="has-text-light">
        <b-input
          type="textarea"
          v-model="heritage.description"
          minlength="10"
          placehoder="Description"
        />
      </b-field>
    </div>
    <!--  Action Buttons  -->
    <div class="buttons is-pulled-right">
      <b-button @click="submit()" type="is-success">Submit</b-button>
      <b-button @click="close()" type="is-danger">Cancel</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from "@vue/composition-api";
import { Heritage } from "@/shared/types/Heritage";

interface HeritagesFormProps {
  cancel: Function;
  heritages: Heritage[];
}

export default {
  name: "HeritagesForm",
  props: {
    cancel: {
      type: [Function],
      required: true
    },
    heritages: {
      type: [Array],
      required: true
    }
  },
  setup(props: HeritagesFormProps) {
    const heritage: Ref<Heritage> = ref(new Heritage());

    function submit() {
      props.heritages.push(heritage.value);
      props.cancel();
    }

    function close() {
      props.cancel();
    }

    return { heritage, submit, close };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";

.heritage-form-base {
  height: 100%;
  background-color: $primary;
}

.form-field {
  margin-bottom: 2rem;
}
</style>
