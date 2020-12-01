<template>
  <button @click="triggeredAction()" class='button button-danger' :type="type">{{text}}</button>
</template>

<script>
export default {
  props: ['type', 'text'],

  methods: {
    triggeredAction(){
      if (confirm("Confirma a operação?")) {
        this.$emit('activatedButton');
      }
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