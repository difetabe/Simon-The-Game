<script lang="ts">
  import PlayButton from '@/components/PlayButton.vue';

  export default {
    name: 'LightsPanel',
    components: {
      PlayButton,
    }
  }
</script>

<template>
  <div class="lights-wrapper">
    <button id="1" @click="count++" class="light light_top-left"></button>
    <button id="2" @click="" class="light light_top-right"></button>
    <button id="3" @click="" class="light light_bottom-left"></button>
    <button id="4" @click="" class="light light_bottom-right"></button>
    <PlayButton></PlayButton>
  </div>
</template>

<style scoped lang="scss">

  .lights-wrapper {
    position: relative;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .light {
    border-radius: 5px;
    border: none;
    width: 100px;
    height: 100px;

    &:hover {
      border-color: transparent;
      box-shadow: inset 0 0 5px #000;
    }

    &:active {
      box-shadow: inset 0 0 40px #000;
    }

    &_top-left {
      background-color: #ffff66;
    }

    &_top-right {
      background-color: #66ff66;
    }

    &_bottom-left {
      background-color: #66d9ff;
    }

    &_bottom-right {
      background-color: #ff6666;
    }
  }
</style>
