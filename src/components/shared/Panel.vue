<!-- alurapic/src/App.vue -->

<template>
        <div class="painel">
          <h2 @click="visible = !visible" class="painel-titulo">{{picture.titulo}}</h2>
          <div  class="painel-conteudo" v-show="visible">
            <slot>
            </slot>
          </div>
        </div>
</template>

<script>
export default {
  props: [
    'picture'
    ],

    data() {
      return {
        visible: true
      }
    }
}
</script>
<style scoped>
/* scoped aplica os estilos somente nesse componente */
  /* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  * {
    box-shadow: 5px 5px 10px black;
  }
</style>