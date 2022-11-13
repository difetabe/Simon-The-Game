<template>
  <div class="dialog-background"></div>
  <div class="game-over_wrapper">
    <h1 class="game-over_title">Game over</h1>
    <button class="game-over_button">Restart</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'GameOverDialog',
  }
</script>

<style scoped lang="scss">
  .game-over {
    &_wrapper {
      border-radius: 5px;
      position: absolute;
      top: 5rem;
      left: 0;
      transform: translate(50%, 0);
      background-color: #f2f2f2;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50vw;
      padding: 2rem;
      z-index: 2;
    }

    &_title {
      margin-bottom: 1rem;
    }

    &_button {
      padding: 1rem;
    }
  }
</style>
