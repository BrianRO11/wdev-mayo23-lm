<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FormularioBienvenida></FormularioBienvenida>
  <h2>Haciendo una calculadora con v-model</h2>
  <CalculadoraBasica></CalculadoraBasica>
  <h2>Llenando etiquetas con V-For</h2>
  <LlenandoEtiquetas></LlenandoEtiquetas>
</template>

<script>

import FormularioBienvenida from './components/FormularioBienvenida.vue';
import CalculadoraBasica from './components/CalculadoraBasica.vue';
import LlenandoEtiquetas from './components/LlenandoEtiquetas.vue';

export default {
  name: 'App',
  components: 
  {
    FormularioBienvenida,
    CalculadoraBasica,
    LlenandoEtiquetas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
