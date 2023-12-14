<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FormularioBienvenida></FormularioBienvenida>
  <SaludarAlPublico 
  nombrePersona='Brian Rivas' 
  lugarClase="Frontend Developer" 
  horarioClase="Lunes Noche"></SaludarAlPublico>
  <SaludarAlPublico 
  nombrePersona='German Ariza' 
  lugarClase="Python" 
  horarioClase="Miercoles Noche"></SaludarAlPublico>
</template>

<script>

import FormularioBienvenida from './components/FormularioBienvenida.vue';
import SaludarAlPublico from './components/SaludarAlPublico.vue';

export default {
  name: 'App',
  components: 
  {
    FormularioBienvenida,
    SaludarAlPublico
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
