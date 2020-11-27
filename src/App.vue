<!-- alurapic/src/App.vue -->

<template>
  <div id="root">
    <Menu :routes="routes"/>
      
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from './components/shared/menu/Menu';
import { routes } from './routes';

export default {
data() {
  return {
    routes
  }
},

components: {
  'Menu': Menu
}



}
</script>

<style>
  #root {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
    text-align: center;
  }

  .page-enter, .page-leave-active {
    opacity: 0;
  }

  .page-enter-active, .page-leave-active  {
    transition: opacity .5s;
  }
</style>