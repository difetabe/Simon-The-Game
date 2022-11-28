<script setup>
  import {COLORS} from "@/utils/colors";

  const props = defineProps({
    state: {
      type: Object,
      default: {}
    },
  })

  const colors = {
    [COLORS.YELLOW]: '#ffff99',
    [COLORS.GREEN]: '#99ff99',
    [COLORS.BLUE]: '#33ccff',
    [COLORS.RED]: '#ff5050',
  };
</script>

<template>
  <button
      @click="$emit('select', state.id)"
      :style="{'background-color': colors[state.id]}"
      class="light"
      :class="{active: state.selected}"
  />
</template>

<style lang="scss" scoped>
  .light {
    border-radius: 5px;
    border: none;
    width: 250px;
    height: 250px;
    transition: box-shadow 0.15s ease-in-out;

    &:hover {
      box-shadow: inset 0 0 8px #000;
    }

    &.active {
      box-shadow: inset 0 0 40px #000;
    }
  }
</style>
