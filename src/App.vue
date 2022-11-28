<script setup>
  import LightButton from '@/components/LightButton.vue';
  import PlayGameButton from "@/components/PlayGameButton.vue";
  import GameOverDialog from "@/components/GameOverDialog.vue"
  import {reactive, ref} from "vue";
  import {COLORS} from "@/utils/colors";
  import {STATES} from "@/utils/gameStates";

  const gameState = ref(STATES.START);
  const level = ref(0);

  const buttons = reactive([
    {
      id: COLORS.YELLOW,
      selected: false
    },
    {
      id: COLORS.GREEN,
      selected: false
    },
    {
      id: COLORS.BLUE,
      selected: false
    },
    {
      id: COLORS.RED,
      selected: false
    }
  ])

  const colorsSequence = ref([]);

  function getRandomId() {
    const index = Math.round(Math.random() * buttons.length);
    return buttons[index].id
  }

  function blink(buttonId, timeout) {
    const button = buttons.find((_button) => _button.id === buttonId);
    return new Promise((resolve) => {
      button.selected = true;
      setTimeout(() => {
        button.selected = false;
        resolve()
      }, timeout)
    })
  }

  function levelUp() {
    level.value++;
  }

  function runNextLevel() {
    prepareComputerTurn()
    levelUp()
    addNewStep();
    runSequence();
  }

  function addNewStep() {
    colorsSequence.value.push(getRandomId());
  }

  function runSequence() {
    colorsSequence.value
        .reduce((acc, btnId) => {
          return acc.then(() => blink(btnId, 700))
        }, Promise.resolve()).then(() => gameState.value = STATES.INPUT)
  }

  function prepareComputerTurn() {
    userInput = [];
    gameState.value = STATES.INIT;
  }

  function startGame() {
    if (gameState.value === STATES.START) {
      runNextLevel()
    }
  }

  let userInput = [];

  function checkUserInput() {
    userInput.forEach((id, index) => {
      if (colorsSequence.value[index] !== id) {
        gameState.value = STATES.END;
      }
    })
  }

  function nextLevelIfComplete() {
    if (gameState.value !== STATES.END
        && userInput.length === colorsSequence.value.length) {
      setTimeout(() => runNextLevel(), 1000);
    }
  }

  function addUserChoise(id) {
    userInput.push(id)
  }

  function selectHandler(id) {
    if (gameState.value !== STATES.INPUT) {
      return
    }
    addUserChoise(id);
    blink(id, 400)
    checkUserInput();
    nextLevelIfComplete();
  }

  function restartGame() {
    gameState.value = STATES.START
  }

</script>

<template>
  <div class="wrapper">
    <div class="display-info">
      <h1
          class="h-1">Lvl: {{ level }}</h1>
      <h2 class="h-2">{{gameState}}</h2>
    </div>
    <div class="lights-wrapper">
      <LightButton
          :state="button"
          @select="selectHandler"
          v-for="button in buttons"
          :key="button.id"
      />
      <PlayGameButton
          @click="startGame"/>
    </div>
  </div>
  <GameOverDialog
      v-if="gameState === STATES.END"
      @restart="restartGame"
  />
</template>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrapper-round {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .lights-wrapper {
    display: grid;
    grid-template: repeat(2, auto)/ repeat(2, auto);
    position: relative;
    gap: 10px;
    border-radius: 50%;
    border: 20px solid #595959;
    overflow: hidden;
  }
  .display-info {
    text-align: center;
  }
</style>
