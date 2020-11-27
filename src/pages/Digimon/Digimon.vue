<!-- alurapic/src/App.vue -->

<template>
  <div id="body">

    <h1 class="centralized">{{ titulo }}</h1>

    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Filtre por título">
    <p>{{filter}}</p>

    <ul class="list-pictures">
      <li class="list-pictures-item" v-bind:key="foto.img" v-for="foto in picturesWithFilter">
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
          filter: ""
      }

    },

    computed: {
      picturesWithFilter(){

        if (this.filter) {
          let regex = new RegExp(this.filter.trim(), 'i');
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
  #body {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
    text-align: center;
  }

  .centralized {
    text-align: center;
  }


  .list-pictures {
    list-style: none;
  }

  .list-pictures .list-pictures-item {
    display: inline-block;
  }



  .filter{
    width: 80%;
  }
</style>