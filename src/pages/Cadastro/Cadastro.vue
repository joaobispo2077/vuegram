<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<template>

  <div>
    <h1 class="centralized">Cadastro</h1>
    <h2 class="centralized"></h2>
    
    <div class="flexible">

      <form @submit.prevent="setDataPicture()">
        <div class="control">
          <label for="title">TÍTULO</label>
          <input id="title" autocomplete="off" 
          @input="picture.title = $event.target.value" :value="picture.title"/>
        </div>

        <div class="control">
          <label for="url">URL</label>
          <input id="url" autocomplete="off" 
          @input="picture.url = $event.target.value" :value="picture.url"/>
          <ImageResponsive/>
        </div>

        <div class="control">
          <label for="descricao">DESCRIÇÃO</label>
          <textarea id="descricao" autocomplete="off" 
          @input="picture.description = $event.target.value" :value="picture.description"></textarea>
        </div>

        <div class="centralized">
          <Button text="GRAVAR" type="submit"/>
          <router-link to="/"><Button text="VOLTAR" type="button"/></router-link>
        </div>

      </form>
      <div class="paner">
        <Panel :title="picture.title">
          <ImageResponsive :title="picture.description" :url="picture.url"/>
        </Panel>
      </div>
    </div>
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

  data() {
    return { 
      picture: {
        title: '',
        url: '',
        description: ''
      }
    }
  },
  methods: {
    setDataPicture() {
      console.log('enviar dados para a API');
      console.log(this.picture);

      this.picture = {
        title: '',
        url: '',
        description: ''
      }

      
    }
  }
}

</script>
<style scoped>

  .centralized {
    text-align: center;
  }
  .control {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .control label {
    display: block;
    font-weight: bold;
  }

 .control label + input, .control textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralized {
    text-align: center;
  }

  .flexible {
    height: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .flexible form,   .flexible.paner {
   max-width: 50%;
  }
  

</style>