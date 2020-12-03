<template>
  <button @click="triggeredAction()" class="button" :class="buttonStyle" :type="type">{{text}}</button>
</template>

<script>
export default {
  props: ['type', 'text', 'confirm', 'buttonStyled'],
  computed: {
    buttonStyle() {
      if (this.buttonStyled == 'default' || !this.buttonStyled) return 'button-default';

      if (this.buttonStyled == 'danger') return 'button-danger';
    }
  },
  methods: {
    triggeredAction(){
      if (this.confirm) {
        if (confirm("Confirma a operação?")) {
          this.$emit('activatedButton');
        }
        return;        
      }
      this.$emit('activatedButton');
      return;    
    }
  }
}
</script>

<style>
.button {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}
.button:hover {
  cursor: pointer;
  opacity: 95%;
}
.button-danger {
    background: firebrick;
    color: white;
}

.button-default {
    background: darkcyan;
    color: white;
}

</style>