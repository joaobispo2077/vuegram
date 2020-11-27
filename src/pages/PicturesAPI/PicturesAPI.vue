<!-- alurapic/src/App.vue -->

<template>
  <div class="corpo">

    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Filtre por título">
    <p>{{filter}}</p>

    <ul class="lista-pictures">
      <li class="lista-pictures-item" v-bind:key="picture.url" v-for="picture in picturesWithFilter">
        <Panel :title="picture.titulo">
         <ImageResponsive :url="picture.url" :title="picture.titulo" />
        </Panel>
      </li>
    </ul>

  </div>
</template>

<script>
import Panel from '../../components/shared/Panel/Panel';
import ImageResponsive from '../..//components/shared/image-responsive/imageResponsive';

export default {
  components: {
    'Panel': Panel,
    'ImageResponsive': ImageResponsive
  },

  data(){
        return {
          titulo: 'Vuegram',
          pictures: [],
          filter: ""
      }

    },

    computed: {
      picturesWithFilter(){

        if (this.filter) {
          let regex = new RegExp(this.filter.trim(), 'i');
          return this.pictures.filter(picture => regex.test(picture.titulo))
        } else {
          return this.pictures;
        }

      }
    },

    created(){
      // alert('hi');

      this.$http
      .get('http://localhost:3333/v1/fotos')
        .then(res => res.json())
        .then(pictures => this.pictures = pictures)
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

  .lista-pictures {
    list-style: none;
  }

  .lista-pictures .lista-pictures-item {
    display: inline-block;
  }



  .filter{
    width: 80%;
  }
</style>