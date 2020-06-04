<template>
  <div>
    <!--  Table  -->
    <b-table bordered :columns="columns" :data="data">
      <template slot="footer">
        <div class="has-text-right">
          <b-button @click="isOpen = true" type="is-info">Add</b-button>
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

export default {
  name: "LevelTable",
  components: {
    LevelForm
  },
  setup() {
    // Table info
    const data: Ref<Array<object>> = ref([]);
    const columns: Ref<Array<object>> = ref([
      {
        field: "characterLevel",
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

    return {
      data,
      columns,
      isOpen,
      close
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";
</style>
s
