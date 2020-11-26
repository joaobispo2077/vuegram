<template>
  <img class="imagem-responsiva" :src="url" :alt="title">
</template>

<script>
export default {
  props: [
    "url",
    "title"
  ]
}
</script>


<style>
.imagem-responsiva {
  width: 100%;
}
</style>