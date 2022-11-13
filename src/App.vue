<script lang="ts">
  import LightsPanel from '@/components/LightsPanel.vue';
  import GameOverDialog from '@/components/GameOverDialog.vue';
  import ScoreInfo from '@/components/ScoreInfo.vue';

  export default {
    components: {
      ScoreInfo,
      LightsPanel,
      GameOverDialog,
    }
  }
</script>

<template>
  <div class="wrapper">
    <ScoreInfo></ScoreInfo>
    <LightsPanel></LightsPanel>
    <!--    <GameOverDialog></GameOverDialog>-->
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
