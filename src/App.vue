<!-- alurapic/src/App.vue -->

<template>
  <div class="root">

  <router-link to="/picturesAPI">Go to picturesAPI</router-link>
  <router-link to="/Cadastro">Go to Cadastro</router-link>
  <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style>
 .root {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
    text-align: center;
  }
</style>