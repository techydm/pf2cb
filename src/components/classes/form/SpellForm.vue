<template>
  <div>
    <!--  Table  -->
    <b-table hoverable bordered :columns="columns" :data="data">
      <template slot="footer">
        <div class="has-text-right">
          <b-button @click="isOpen = trues" type="is-info">Add</b-button>
        </div>
      </template>
    </b-table>
    <!--  Modal  -->
    <b-modal :active.sync="isOpen" can-cancel="false">
      <div class="spellform-add">
        <div class="is-flex">
          <div
            class="spellform-add-spellcount"
            v-for="spellLevel in spellLevels"
            :key="spellLevel"
          >
            <b-field custom-class="has-text-light" :label="spellLevel">
              <b-input />
            </b-field>
          </div>
        </div>
        <div class="buttons">
          <b-button type="is-success">Submit</b-button>
          <b-button @click="isOpen = false" type="is-danger">Cancel</b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Ref, ref } from "@vue/composition-api";

export default {
  name: "SpellForm",
  setup() {
    const data = ref([]);

    const headerClass = "is-dark";
    const columns = ref([
      {
        field: "characterLevel",
        label: "Character Level",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "cantrips",
        label: "Cantrips",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "first",
        label: "1st",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "second",
        label: "2nd",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "third",
        label: "3rd",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "fourth",
        label: "4th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "fifth",
        label: "5th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "sixth",
        label: "6th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "seventh",
        label: "7th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "eighth",
        label: "8th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "ninth",
        label: "9th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "tenth",
        label: "10th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      }
    ]);

    // Add spells
    const spellLevels: Ref<string[]> = ref([
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th"
    ]);

    // Modal
    const isOpen: Ref<boolean> = ref(false);

    return { data, columns, isOpen, spellLevels };
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/styles";
.spellform-add {
  background-color: $primary;
  padding: 1rem;
  border-radius: 2rem;
}
.spellform-add-spellcount {
  margin: 1rem;
}
</style>
