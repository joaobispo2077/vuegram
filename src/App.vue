<!-- alurapic/src/App.vue -->

<template>
  <div class="root">
    
  <nav >
    <ul>
      <li v-bind:key="route.title" v-for="route in routes"> 
        <router-link :to="route.path ? route.path : '/' ">
          {{route.title}}
        </router-link>
      </li>
    </ul>
  </nav>

  <router-view></router-view>
  </div>
</template>

<script>
import { routes } from './routes';


export default {

  data() {
    return { 
      routes
    }
  }

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