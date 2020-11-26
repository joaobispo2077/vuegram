<!-- alurapic/src/App.vue -->

<template>
  <div class="corpo">

    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtre por título">
    {{filtro}}

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-bind:key="foto.url" v-for="foto in fotosComFiltro">
        <Panel :picture="foto">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
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
          titulo: 'Vuegram',
          fotos: [],
          filtro: ""
      }

    },

    computed: {
      fotosComFiltro(){

        if (this.filtro) {
          let regex = new RegExp(this.filtro.trim(), 'i');
          return this.fotos.filter(foto => regex.test(foto.titulo))
        } else {
          return this.fotos;
        }

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

  .imagem-responsiva {
    width: 100%;
  }

  .filtro{
    width: 100%;
  }
</style>