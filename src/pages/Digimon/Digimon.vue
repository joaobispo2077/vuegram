<!-- alurapic/src/App.vue -->

<template>
  <div id="body">

    <h1 class="centralized">{{ titulo }}</h1>

    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Filtre por título">
    <p>{{filter}}</p>

    <ul class="list-pictures">
      <li class="list-pictures-item" v-bind:key="picture.img" v-for="picture in picturesWithFilter">
        <Panel :title="picture.name">
         <ImageResponsive :url="picture.img" :title="picture.name" />
         <Button 
          @activatedButton="removePicture(picture)" 
          type="button" 
          text="Remover" 
          :confirm="true"
          buttonStyled="danger"
         />
        </Panel>
      </li>
    </ul>

  </div>
</template>

<script>
import Panel from '../../components/shared/Panel/Panel';
import ImageResponsive from '../../components/shared/image-responsive/imageResponsive';
import Button from '../../components/shared/button/Button';

export default {


  components: {
    'Panel': Panel,
    'ImageResponsive': ImageResponsive,
    'Button': Button
  },

  data(){
        return {
          titulo: 'Digigram',
          pictures: [],
          filter: ""
      }

  },

  computed: {
      picturesWithFilter(){

        if (this.filter) {
          let regex = new RegExp(this.filter.trim(), 'i');
          return this.pictures.filter(picture => regex.test(picture.name))
        } else {
          return this.pictures;
        }

      }
  },

  methods: {
    removePicture(digimon) {
      alert(`Digimon removido: ${digimon.name}`);        
    }
  },

  created(){
      // alert('hi');

      this.$http
      .get('https://digimon-api.herokuapp.com/api/digimon/level/rookie')
        .then(res => res.json())
        .then(pictures => this.pictures = pictures)
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