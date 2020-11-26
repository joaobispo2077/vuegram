<template>
  <div id="root">
    <h1>{{ title }}</h1>

    <ul>
      <li v-bind:key="digi.img" v-for="digi of digis">
        <img :src="digi.img" :alt="digi.name">
        <p>{{ digi.name }}</p>
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
      const digisPromise = this.$http
      .get('https://digimon-api.herokuapp.com/api/digimon/level/rookie')
      .then(res => {
        res.json().then(digis => this.digis = digis);
        })
      .catch(err => console.log(err));

      console.log(digisPromise);
    }

  }
</script>
<style>
#root{
}
#root ul {
 display: flex;
 width: 900px;

}

</style>
