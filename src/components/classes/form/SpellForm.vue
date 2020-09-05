<template>
  <div>
    <!--  Table  -->
    <b-table hoverable bordered :columns="columns" :data="data">
      <template v-if="!viewMode" slot="footer">
        <div class="buttons is-pulled-right">
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
        <div class="buttons is-pulled-right">
          <b-button @click="addSpells()" type="is-success">Submit</b-button>
          <b-button @click="isOpen = false" type="is-danger">Cancel</b-button>
        </div>
      </div>
    </b-modal>
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
import { addSpellSlots } from "@/services/classes";

interface SpellFormProp {
  cancel: Function;
}

export default {
  name: "SpellForm",
  props: {
    cancel: {
      type: [Function],
      required: false
    },
    viewMode: {
      type: [Boolean],
      default: false
    }
  },
  setup(props: SpellFormProp) {
    // Modal
    const isOpen: Ref<boolean> = ref(false);

    // Table info
    const { data, columns } = getTableData();

    // Processing variable
    const spellSlots: Ref<SpellRow> = ref(new SpellRow());

    // Adding row to the spell slot table
    function addSpells() {
      addRow(spellSlots.value);
      spellSlots.value = new SpellRow();
      isOpen.value = false;
    }

    // Submission function
    function submit() {
      addSpellSlots(data.value);
      props.cancel();
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
  height: 10rem;
  background-color: $primary;
  padding: 1rem;
  border-radius: 2rem;
}
.spellform-add-spellcount {
  margin: 1rem;
}
</style>
