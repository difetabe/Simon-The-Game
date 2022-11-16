<script>
  export default {
    name: "ScoreInfo",
    data() {
      return {
        level: 0,
      };
    }
  };
</script>

<template>
  <h1 class="h-1">
    LvL <span> {{ level }} </span>
  </h1>
</template>

<style lang="scss">
  .h-1 {
    color: #fff;
    text-shadow: 1px 1px 2px #000;
    margin: 2rem auto;
  }
</style>
