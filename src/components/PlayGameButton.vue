<script setup>

</script>

<template>
  <button class="play-button">Start</button>
</template>

<style lang="scss" scoped>
  .play-button {
    text-align: center;
    font-size: 2em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25%;
    height: 25%;
    background-color: #595959;
    color: #f2f2f2;
    border-radius: 50%;
    border: none;
    transition: background 0.2s ease-in-out;

    &:hover {
      border-color: transparent;
      box-shadow: inset 0 0 5px #000;
    }

    &:active {
      box-shadow: inset 0 0 40px #000;
    }
  }
</style>
