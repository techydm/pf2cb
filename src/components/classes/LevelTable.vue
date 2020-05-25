<template>
  <div>
    <!--  Table  -->
    <b-table bordered :columns="columns" :data="data" />
    <!--   Modal     -->
    <LevelForm />
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

    return {
      data,
      columns
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles";
</style>
s
