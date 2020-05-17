<template>
  <div>
    <!--  Table  -->
    <b-table hoverable bordered :columns="columns" :data="data">
      <template slot="footer">
        <div class="has-text-right buttons">
          <b-button @click="isOpen = true" type="is-info">Add</b-button>
          <b-button @click="submit()" type="is-success">Submit</b-button>
          <b-button @click="cancel()" type="is-danger">Cancel</b-button>
        </div>
      </template>
    </b-table>
    <!--  Modal  -->
    <b-modal :active.sync="isOpen" :can-cancel="false">
      <div class="spellform-add">
        <div class="is-flex">
          <div
            class="spellform-add-spellcount"
            v-for="spellLevel in spellLevels"
            :key="spellLevel"
          >
            <b-field custom-class="has-text-light" :label="spellLevel">
              <b-input v-model="spellSlots[spellLevel]" />
            </b-field>
          </div>
        </div>
        <div class="buttons">
          <b-button @click="addSpells()" type="is-success">Submit</b-button>
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
  props: {
    cancel: {
      type: [Function],
      required: true
    }
  },
  setup() {
    // Modal
    const isOpen: Ref<boolean> = ref(false);

    // Table info
    const data: Ref<Array<object>> = ref([]);

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
        field: "1st",
        label: "1st",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "2nd",
        label: "2nd",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "3rd",
        label: "3rd",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "4th",
        label: "4th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "5th",
        label: "5th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "6th",
        label: "6th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "7th",
        label: "7th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "8th",
        label: "8th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "9th",
        label: "9th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      },
      {
        field: "10th",
        label: "10th",
        width: "40",
        numeric: true,
        centered: true,
        headerClass
      }
    ]);

    // Submission function
    function submit() {
      isOpen.value = false;
    }

    return { data, columns, isOpen, submit };
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
