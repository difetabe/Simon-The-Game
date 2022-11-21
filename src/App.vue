<script setup>
  import LightButton from '@/components/LightButton.vue';
  import PlayGameButton from "@/components/PlayGameButton.vue";
  import {ref} from "vue";

  const state = {
    waitingStart: 'waitingStart',
    computerTurn: 'computerTurn',
    userTurn: 'userTurn',
    gameOver: 'gameOver'
  };
  const stateGame = ref(state.waitingStart);
  const level = ref(0);

  const colors = {
    yellow: 'yellow',
    green: 'green',
    blue: 'blue',
    red: 'red',
  };
  const colorsArr = Object.values(colors);
  const colorsSequence = [];

  const activeButtonColor = ref('');

  function getRandomNum() {
    return Math.floor(Math.random() * 4 + 1) - 1;
  }

  function onCLick(color) {
    if (stateGame.value !== state.userTurn) {
      return;
    }
    if (colorsSequence[0] === color) {
      timer(1000).then(() => levelUp())
    } else {
      stateGame.value = state.gameOver;
    }
  }

  function timer(timeout) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), timeout)
    })
  }

  function levelUp() {
    level.value++;
    const randomColorIndex = getRandomNum();
    colorsSequence.push(colorsArr[randomColorIndex]);
    colorsSequence
        .reduce((acc, curr) => {
          return acc.then(() => {
            activeButtonColor.value = curr;
            return timer(700)
          })
              .then(() => {
                activeButtonColor.value = '';
                return timer(300)
              })
        }, Promise.resolve())
  }


  function startGame() {
    if (stateGame.value === state.waitingStart) {
      levelUp()
      stateGame.value = state.userTurn
    }
  }

</script>

<template>
  <div class="wrapper">
    <div>Lvl: {{ level }} {{ stateGame }}</div>
    <div class="lights-wrapper">
      <LightButton @customClick="onCLick" :color="colors.yellow" :class="{active: colors.yellow === activeButtonColor}"/>
      <LightButton @customClick="onCLick" :color="colors.green" :class="{active: colors.green === activeButtonColor}"/>
      <LightButton @customClick="onCLick" :color="colors.blue" :class="{active: colors.blue === activeButtonColor}"/>
      <LightButton @customClick="onCLick" :color="colors.red" :class="{active: colors.red === activeButtonColor}"/>
      <PlayGameButton @click="startGame"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .lights-wrapper {
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
</style>
