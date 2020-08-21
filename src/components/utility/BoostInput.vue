<template>
  <b-dropdown scrollable max-height="10rem" multiple aria-role="list">
    <button class="button is-primary" type="button" slot="trigger">
      <h1>Select</h1>
      <b-icon icon="menu-down"></b-icon>
    </button>
    <b-dropdown-item
      v-for="boost in BOOSTS"
      :key="boost"
      :value="boost"
      @click="manageBoosts(boost)"
      aria-role="listitem"
    >
      <span>{{ boost }}</span>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
import { Boosts, BOOSTS } from "@/shared/types/AbilityScores";

export default {
  name: "BoostInput",
  setup(props: any, { emit }: any) {
    let boosts: Boosts[] = [];
    const existInBoosts = (x: Boosts) => boosts.includes(x);
    const isBoost = (x: string): x is Boosts => BOOSTS.includes(x);

    function manageBoosts(boost: string) {
      if (isBoost(boost)) {
        if (existInBoosts(boost)) {
          emit("remove-boost", boost);
          boosts = boosts.filter(b => b !== boost);
        } else {
          emit("add-boost", boost);
          boosts.push(boost);
        }
      }
    }

    return { BOOSTS, manageBoosts };
  }
};
</script>
