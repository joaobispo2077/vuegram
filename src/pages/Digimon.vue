<template>
  <div id="root">
    <h1 class="title">{{ title }}</h1>

    <ul class="list-digimon">

      <li class="list-digimon-item" v-bind:key="digi.img" v-for="digi of digis">
        <div class="painel">

          <h2 class="painel-titulo"><label>{{ digi.name }}</label></h2>

          <div class="painel-corpo"><img :src="digi.img" :alt="digi.name"></div>

        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
  export default{
    data(){
        return {
          title: 'Digigram',
          digis: []
      }

    },
    created(){
      alert('hi');

      this.$http
      .get('https://digimon-api.herokuapp.com/api/digimon/level/rookie')
        .then(res => res.json())
        .then(digisAPI => this.digis = digisAPI)
        .catch(err => console.log(err));
    }

  }
</script>
<style>
  #root {
    background-color: '#FFFFF';
    font-family: Helvetica;
    width: 100vw;  
  }

  #root .title {
    text-align: center;
  }

  #root .list-digimon {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-between;
  }

  #root .list-digimon .list-digimon-item {
   display: flex; 
   flex-direction: column;
   text-align: center;
   align-items: center;
   margin: 1rem;
   border: 1rem solid black;
  }
</style>
