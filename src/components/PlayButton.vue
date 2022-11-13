<template>
  <button class="play-button">Start</button>
</template>

<script lang="ts">
  export default {
    name: 'PlayButton'
  }
</script>

<style scoped>
  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background-color: black;
    color: #f2f2f2;
    border-radius: 50%;
  }
</style>
