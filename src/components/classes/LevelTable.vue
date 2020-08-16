<template>
  <div>
    <!--  Table  -->
    <b-table bordered :columns="columns" :data="data">
      <template v-if="!viewMode" slot="footer">
        <div class="buttons is-pulled-right">
          <b-button @click="isOpen = true" type="is-info">Add</b-button>
          <b-button type="is-danger" @click="clear()">Clear</b-button>
        </div>
      </template>
    </b-table>
    <!--   Modal     -->
    <b-modal :active.sync="isOpen" :can-cancel="false">
      <LevelForm :cancel="close" />
    </b-modal>
  </div>
</template>

<script lang="ts">
import LevelForm from "@/components/classes/form/LevelForm.vue";
import { Ref, ref } from "@vue/composition-api";
import { getWorkingClass } from "@/services/classes";

export default {
  name: "LevelTable",
  components: {
    LevelForm
  },
  props: {
    viewMode: {
      default: false,
      type: [Boolean]
    }
  },
  setup() {
    // Table info
    const data: Ref<Array<object>> = ref(getWorkingClass().value.levels);
    const columns: Ref<Array<object>> = ref([
      {
        field: "level",
        label: "Character Level",
        width: "40",
        numeric: true,
        centered: true,
        headerClass: "is-dark"
      },
      {
        field: "classFeatures",
        label: "Class Features",
        width: "400",
        headerClass: "is-dark"
      }
    ]);

    const isOpen: Ref<boolean> = ref(false);

    function close() {
      isOpen.value = false;
    }

    function clear() {
      data.value = [];
      getWorkingClass().value.levels = [];
    }

    return {
      data,
      columns,
      isOpen,
      close,
      clear
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";
</style>
