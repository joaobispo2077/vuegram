<!-- alurapic/src/App.vue -->

<template>
  <div class="corpo">

    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-bind:key="foto.url" v-for="foto in fotos">
        <Panel :picture="foto">
          <img :src="foto.url" :alt="foto.titulo">
        </Panel>
      </li>
    </ul>

  </div>
</template>

<script>
import Panel from './components/shared/Panel';

export default {
  components: {
    'Panel': Panel
  },

  data(){
        return {
          title: 'Vuegram',
          fotos: []
      }

    },
    created(){
      alert('hi');

      this.$http
      .get('http://localhost:3333/v1/fotos')
        .then(res => res.json())
        .then(fotos => this.fotos = fotos)
        .catch(err => console.log(err));
    }

  }
</script>

<style>

  .centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }
</style>