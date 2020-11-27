<template>
  <img class="responsive-picture" :src="url" :alt="title">
</template>

<script>
export default {
  props: [
    "url",
    "title"
  ]
}
</script>


<style scoped>
.responsive-picture {
  width: 100%;
}
</style>