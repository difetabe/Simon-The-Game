<script setup>
  const props = defineProps({
    color: {
      type: String,
      default: 'orange'
    },
  })
</script>

<template>
  <button @click="$emit('customClick', props.color)" :style="{'background-color': props.color}" class="light"/>
</template>

<style lang="scss" scoped>
  .light {
    border-radius: 5px;
    border: none;
    width: 100px;
    height: 100px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      box-shadow: inset 0 0 8px #000;
    }

    &.active,
    &:active {
      box-shadow: inset 0 0 40px #000;
    }
  }
</style>
