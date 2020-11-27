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
import { routes } from './routes';
import Menu from './components/shared/menu/Menu';


export default {
components: {
  'Menu': Menu,
},

data() {
  return {
    routes
  }
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