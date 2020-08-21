<template>
  <div>
    <h1>Card</h1>
  </div>
</template>

<script>
import { Ancestry } from "@/shared/types/Ancestry";

export default {
  name: "AncestryCard",
  props: {
    ancestry: {
      type: [Ancestry],
      required: true
    }
  }
};
</script>

<style scoped></style>
