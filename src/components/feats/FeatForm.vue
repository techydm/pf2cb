<template>
  <div class="form-base">
    <!--Name-->
    <div class="form-field">
      <b-field label="Name" custom-class="has-text-light">
        <b-input v-model="feat.name" />
      </b-field>
    </div>
    <!--Tags/type-->
    <div class="form-field">
      <b-field label="tags/type" custom-class="has-text-light">
        <b-taginput
          v-model="feat.type"
          icon="label"
          placeholder="Add the feat tags"
        >
        </b-taginput>
      </b-field>
    </div>
    <!--Description-->
    <div class="form-field">
      <b-field label="Description" custom-class="has-text-light">
        <b-input type="textarea" minlength="15" v-model="feat.description" />
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
import { Feat } from "@/shared/types/feat";
import { newFeat, getWrkFeat, getFeat, submitFeat } from "@/services/feats";

interface FeatFormProps {
  cancel: Function;
}

export default {
  name: "FeatForm",
  props: {
    cancel: {
      type: [Function],
      required: true
    }
  },

  setup(props: FeatFormProps) {
    const feat: Ref<Feat> = newFeat();

    function submit() {
      submitFeat(feat.value);
      props.cancel();
    }

    function close() {
      props.cancel();
    }

    const selected: Ref<any> = ref(null);

    return {
      feat,
      submit,
      close
    };
  }
};
//const isFeatOpen: Ref<boolean> = ref(false);
</script>

<style scoped lang="scss">
@import "../../assets/styles";

.form-base {
  height: 100%;
  max-height: min-content;
  background-color: $primary;
}

.form-field {
  margin-bottom: 2rem;
}
</style>
