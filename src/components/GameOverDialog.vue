<script setup>

  const props = defineProps({
    active: {
      type: Boolean,
      default: false
    },
  })
</script>

<template>
  <div class="dialog-background"></div>
  <div class="game-over_wrapper">
    <h1 class="game-over_title">Game over</h1>
    <h1 class="game-over_title score">Your score is {{  }}!</h1>
    <button @click="$emit('customClick', props.active)" class="game-over_button">Restart</button>
  </div>
</template>

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

    .score {
      color: #cc0000;
    }

    &_button {
      padding: 1rem;
    }
  }

  .disabled {
    display: none;
  }
</style>
