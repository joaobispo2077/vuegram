<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<template>

  <div>
    <h1 class="centralized">Cadastro</h1>
    <h2 class="centralized"></h2>

    <form>
      <div class="control">
        <label for="title">TÍTULO</label>
        <input id="title" autocomplete="off">
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input id="url" autocomplete="off">
        <ImageResponsive/>
      </div>

      <div class="control">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off"></textarea>
      </div>

      <div class="centralized">
        <Button text="GRAVAR" type="submit"/>
        <router-link to="/"><Button text="VOLTAR" type="button"/></router-link>
      </div>

    </form>
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

</style>