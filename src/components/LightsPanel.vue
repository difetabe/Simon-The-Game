<script>
  import simpleGameMode from "@/assets/scripts/simple-game-mode";
  import PlayButton from "@/components/PlayButton.vue";

  export default {
    name: "LightsPanel",
    components: {
      PlayButton,
    },
    data() {
      return {
        mode: "simple",
        steps: [],
        step: 0,
      };
    },
    methods: {
      getRandomId() {
        return Math.floor(Math.random() * 4 + 1);
      },
      gameStart(step) {
        let id = this.getRandomId()
        this.steps.push(id);
      },
    }
  };
</script>

<template>
  <div class="lights-wrapper">
    <button
        id="1"
        class="light light_top-left"
        @click='gameStart(step)'
    >
      {{ steps }}
    </button>
    <button
        id="2"
        class="light light_top-right"
    >
      {{ steps }}
    </button>
    <button
        id="3"
        class="light light_bottom-left"
    >
      {{ steps }}
    </button>
    <button
        id="4"
        class="light light_bottom-right"
    >
      {{ steps }}
    </button>
    <PlayButton></PlayButton>
  </div>
</template>

<style lang="scss">
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
    transition: background-color 0.2s ease-in-out;

    &:hover {
      box-shadow: inset 0 0 8px #000;
    }

    &:active {
      background-color: #666666;
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
