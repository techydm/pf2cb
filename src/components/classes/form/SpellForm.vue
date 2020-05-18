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
    {{ data }};
  </div>
</template>

<script lang="ts">
import { Ref, ref } from "@vue/composition-api";
import {
  getTableData,
  spellLevels,
  SpellRow,
  addRow
} from "@/services/spellForm";

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
    const { data, columns } = getTableData();

    // Temp
    const spellSlots: Ref<any> = ref(new SpellRow());
    function addSpells() {
      addRow(spellSlots.value);
      spellSlots.value = new SpellRow();
      isOpen.value = false;
    }

    // Submission function
    function submit() {
      isOpen.value = false;
    }

    return {
      data,
      columns,
      spellLevels,
      isOpen,
      spellSlots,
      submit,
      addSpells
    };
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
