<!--first draft gets ra-rune-stone as forging button  --->
<!---Displays feat cards--->
<!--hilights tags--->
<template>
  <div>
    <div @click="openModal()" class="background-base">
      <div class="background-text">
        <div class="background-text-name is-size-5 has-text-weight-bold">
          {{ ancestry.name }}
        </div>
      </div>
      <div class="background-tags">
        <span class="is-size-5 has-text-weight-bold">Boosts: </span>
      </div>
      <!--  Modal  -->
      <b-modal :active.sync="ancestryView" :can-cancel="false">
        <AncestryView :ancestry="ancestry" :close="closeModal" />
      </b-modal>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/styles";

.background-base {
  height: 17rem;
  width: 40rem;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 2.5rem;
  background-color: $primary;
}

.background-text {
  margin-bottom: 1rem;
}

.background-text-name {
  margin-bottom: 1rem;
}

.background-tags {
  display: flex;
  align-items: center;
}

.background-tag {
  margin: 0.5rem;
}
</style>
