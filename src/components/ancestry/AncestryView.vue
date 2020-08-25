<template>
  <div class="background-view-base">
    <!--  Name  -->
    <div class="background-text">
      <div class="background-text-name is-size-5 has-text-weight-bold">
        {{ ancestry.name }}
      </div>
    </div>
    <!--  Details  -->
    <div class="background-text">
      <div>
        <span>HP: </span>
        <span>{{ ancestry.hp }}</span>
      </div>
      <div>
        <span>Size: </span>
        <span>{{ ancestry.size }}</span>
      </div>
    </div>
    <div>
      <span>Speed: </span>
      <span>{{ ancestry.speed }}</span>
    </div>
    <!-- Boosts  -->
    <div class="background-tags">
      <span class="is-size-5 has-text-weight-bold">Boosts: </span>
      <b-tag
        v-for="boost in ancestry.abilityBoosts"
        :key="boost"
        class="is-dark background-tag"
        size="is-medium"
      >
        {{ boost }}
      </b-tag>
    </div>
    <!-- Flaws  -->
    <div class="background-tags">
      <span class="is-size-5 has-text-weight-bold">Flaws: </span>
      <b-tag
        v-for="flaw in ancestry.abilityFlaws"
        :key="flaw"
        class="is-dark background-tag"
        size="is-medium"
      >
        {{ flaw }}
      </b-tag>
    </div>
    <!-- Known Languages  -->
    <div class="background-tags">
      <span class="is-size-5 has-text-weight-bold">Known Languages: </span>
      <b-tag
        v-for="lang in ancestry.languages"
        :key="lang"
        class="is-dark background-tag"
        size="is-medium"
      >
        {{ lang }}
      </b-tag>
    </div>
    <!--  Learnable Languages  -->
    <div class="background-tags">
      <span class="is-size-5 has-text-weight-bold">Learnable Languages: </span>
      <b-tag
        v-for="lang in ancestry.languagesAccess"
        :key="lang"
        class="is-dark background-tag"
        size="is-medium"
      >
        {{ lang }}
      </b-tag>
    </div>
    <!-- Traits  -->
    <div class="background-tags">
      <span class="is-size-5 has-text-weight-bold">Traits: </span>
      <b-tag
        v-for="trait in ancestry.traits"
        :key="trait"
        class="is-dark background-tag"
        size="is-medium"
      >
        {{ trait }}
      </b-tag>
    </div>
    <!-- Senses  -->
    <div class="background-tags">
      <span class="is-size-5 has-text-weight-bold">Senses: </span>
      <b-tag
        v-for="sense in ancestry.senses"
        :key="sense"
        class="is-dark background-tag"
        size="is-medium"
      >
        {{ sense }}
      </b-tag>
    </div>
    <div>
      <HeritagesCard
        v-for="heritage in ancestry.heritages"
        :key="heritage.name"
        :heritage="heritage"
      />
    </div>
    <!--  Action Bar  -->
    <div class="buttons is-right">
      <b-button disabled type="is-info">Edit</b-button>
      <b-button disabled type="is-danger">Delete</b-button>
      <b-button @click="close()" type="is-danger">Close</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Ancestry } from "@/shared/types/Ancestry";
import HeritagesCard from "@/components/ancestry/HeritagesCard.vue";

export default {
  name: "AncestryView",
  components: { HeritagesCard },
  props: {
    ancestry: {
      type: [Ancestry],
      required: true
    },
    close: {
      type: [Function],
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";

.background-view-base {
  display: flex;
  flex-flow: column;
  padding: 3rem;
  border-radius: 2.5rem;
  background-color: $primary;

  div {
    margin-bottom: 1rem;
  }
}

.background-view-text {
  margin-bottom: 3rem;
}

.background-tags {
  display: flex;
  align-items: center;
}

.background-tag {
  margin: 0.5rem;
}
</style>
