<template>
  <div class="level-base has-background-primary">
    <div class="is-flex is-wrapped">
      <!--  Inputs  -->
      <div class="level-inputs">
        <!--   Level     -->
        <h1>Level: {{ level }}</h1>
        <!--   Buffs     -->
        <b-dropdown multiple aria-role="list">
          <button class="button is-primary" type="button" slot="trigger">
            <h1>Buffs</h1>
            <b-icon icon="menu-down"></b-icon>
          </button>
          <b-dropdown-item
            v-for="buff in BUFFS"
            :key="buff.value"
            :value="buff.value"
            @click="levelBuffs(buff.key)"
            aria-role="listitem"
          >
            <span>{{ buff.key }}</span>
          </b-dropdown-item>
        </b-dropdown>
        <!--   Features  -->
        <div class="feature">
          <div>Class Feature:</div>
          <b-input placeholder="Name" v-model="feature.name" />
          <b-input
            type="textarea"
            v-model="feature.description"
            minlength="10"
            maxlength="100"
            placeholder="Descripiton"
          />
          <b-button type="is-success" icon-right="plus" @click="addFeature()" />
        </div>
      </div>
      <!--  Display  -->
      <div class="level-display">
        {{ bffs }}
        {{ features }}
      </div>
    </div>
    <!--   Buttons   -->
    <div class="buttons is-pulled-right">
      <b-button type="is-success">Submit</b-button>
      <b-button @click="cancel()" type="is-danger">Cancel</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, ref } from "@vue/composition-api";
import { BUFFS, ClassFeature } from "@/shared/types/class";

interface LevelFormProps {
  cancel: Function;
}

export default {
  name: "LevelForm",
  props: {
    cancel: {
      type: [Function],
      required: true
    }
  },
  setup() {
    const level: Ref<number> = ref(1);

    // Buffs
    const bffs: Ref<Array<string>> = ref([]);
    function levelBuffs(buff: string) {
      if (bffs.value.indexOf(buff) === -1) {
        bffs.value.push(buff);
      } else {
        bffs.value = bffs.value.filter(bf => bf !== buff);
      }
    }

    const feature: Ref<ClassFeature> = ref(new ClassFeature());
    const features: Ref<Array<ClassFeature>> = ref([]);
    function addFeature() {
      features.value.push(feature.value);
      feature.value = new ClassFeature();
    }

    return { level, BUFFS, bffs, levelBuffs, feature, features, addFeature };
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/styles";
.feature {
  display: flex;
  flex-flow: nowrap column;
}
.input-section {
  width: 50%;
}

.level-base {
  height: 25rem;
  border-radius: 30px;
  padding: 2.5rem;
}

.level-inputs {
  width: 50%;
}

.level-display {
  width: 50%;
}
</style>
