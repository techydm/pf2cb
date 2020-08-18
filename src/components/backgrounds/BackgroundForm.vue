<template>
  <div class="form-base">
    <div>
      <!--   Name   -->
      <div class="form-field">
        <b-field label="Name" custom-class="has-text-light">
          <b-input v-model="background.name" />
        </b-field>
      </div>
      <!--   Description   -->
      <div class="form-field">
        <b-field label="Description" custom-class="has-text-light">
          <b-input
            type="textarea"
            v-model="background.description"
            minlength="10"
            placehoder="Description"
          />
        </b-field>
      </div>
      <!--  Boosts  -->
      <div class="form-field">
        <b-field label="Boosts" custom-class="has-text-light">
          <b-dropdown scrollable max-height="10rem" multiple aria-role="list">
            <button class="button is-primary" type="button" slot="trigger">
              <h1>Select</h1>
              <b-icon icon="menu-down"></b-icon>
            </button>
            <b-dropdown-item
              v-for="boost in BOOSTS"
              :key="boost"
              :value="boost"
              @click="addBoost(boost)"
              aria-role="listitem"
            >
              <span>{{ boost }}</span>
            </b-dropdown-item>
          </b-dropdown>
        </b-field>
      </div>
      <!--  Feat  -->
      <div class="form-field">
        <b-field custom-class="has-text-light" label="Find Feat">
          <b-autocomplete
            v-model="feat"
            :data="feats"
            placeholder="Some Feat name"
            icon="magnify"
            clearable
            @select="option => (selected = option)"
          >
            <template slot="empty">No results found</template>
          </b-autocomplete>
        </b-field>
      </div>
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
import { Background, BOOSTS } from "@/shared/types/Backgrounds";
import { newBackground, addBoost } from "@/services/backgrounds";
import { Feat } from "@/shared/types/Feat";

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

    function submit() {
      return;
    }

    function close() {
      props.cancel();
    }

    // TODO: Temporary feats
    const feat: Ref<string> = ref("");
    const feats: Ref<Feat[]> = ref([]);
    const selected: Ref<any> = ref(null);

    return {
      background,
      feat,
      feats,
      selected,
      BOOSTS,
      submit,
      close,
      addBoost
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";

.form-base {
  height: 100%;
  background-color: $primary;
}

.form-inputs {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}

.form-field {
  margin-bottom: 3rem;
}
</style>
