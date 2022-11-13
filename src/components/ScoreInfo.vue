<template>
  <h1 class="h-1"> Your score is <span> {{ 0 }} </span></h1>
</template>

<script>
  export default {
    name: "ScoreInfo"
  }
</script>

<style scoped>
  .h-1 {
    color: #fff;
    text-shadow: 1px 1px 2px #000;
    margin: 2rem auto;
  }
</style>
