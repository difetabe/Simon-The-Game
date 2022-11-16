<script setup>
  import {ref, computed} from "vue";
  import LightsPanel from "@/components/LightsPanel.vue";
  import GameOverDialog from "@/components/GameOverDialog.vue";
  import ScoreInfo from "@/components/ScoreInfo.vue";


</script>

<template>
  <div class="wrapper">
    <ScoreInfo></ScoreInfo>
    <LightsPanel></LightsPanel>
    <GameOverDialog v-if="gameOver"/>
  </div>
</template>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
