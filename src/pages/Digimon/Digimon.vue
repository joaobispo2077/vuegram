<!-- alurapic/src/App.vue -->

<template>
  <div class="corpo">

    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtre por título">
    <p>{{filtro}}</p>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-bind:key="foto.img" v-for="foto in fotosComFiltro">
        <Panel :title="foto.name">
         <ImageResponsive :url="foto.img" :title="foto.name" />
        </Panel>
      </li>
    </ul>

  </div>
</template>

<script>
import Panel from '../../components/shared/Panel/Panel';
import ImageResponsive from '../../components/shared/image-responsive/imageResponsive';

export default {
  components: {
    'Panel': Panel,
    'ImageResponsive': ImageResponsive
  },

  data(){
        return {
          titulo: 'Digigram',
          fotos: [],
          filtro: ""
      }

    },

    computed: {
      fotosComFiltro(){

        if (this.filtro) {
          let regex = new RegExp(this.filtro.trim(), 'i');
          return this.fotos.filter(foto => regex.test(foto.name))
        } else {
          return this.fotos;
        }

      }
    },

    created(){
      alert('hi');

      this.$http
      .get('https://digimon-api.herokuapp.com/api/digimon/level/rookie')
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
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }



  .filtro{
    width: 80%;
  }
</style>