<!-- alurapic/src/App.vue -->

<template>
        <div class="panel">
          <transition name="panel-fade">
            <div  class="panel-content" v-show="visible">              
              <slot></slot>
            </div>
          </transition>
          <h2 @click="visible = !visible" class="panel-title">{{title}}</h2>
        </div>
</template>

<script>
export default {
  
  data() {
    return {
      visible: true
      }
    },
    
    props: [
      'title'
      ],
}
</script>
<style scoped>
/* scoped aplica os estilos somente nesse componente */
  /* estilo do panel */ 

   .panel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    max-width: 225px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .panel-content {
    overflow: hidden;
  }

  .panel .panel-title {
    text-align: center;
    border: solid 2px;
    background: lightgreen;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
  .panel .panel-title:hover {
    cursor: pointer;
  }
  * {
    box-shadow: 5px 5px 10px black;
  }

  .panel-fade-enter, .panel-fade-leave-active {
    opacity: 0;
  }

  .panel-fade-enter-active, .panel-fade-leave-active  {
    transition: opacity .25s;
  }

</style>