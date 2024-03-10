<template>
    <div id="app" style="text-align: center;">
      <h1>Calculadora de Propina</h1>
      <div>
        <label for="total">Monto Total:</label>
        <input type="number" id="total" v-model.number="total">
      </div>
      <div>
        <button v-for="propina in propinas" :key="propina" @click="calcularProp(propina)">
          {{ propina }}%
        </button>
      </div>
      <div v-if="CantidadProp !== null">
        <p>El monto total con {{ SeleccionarProp }}% de propina es: {{ TotalConProp }}</p>
      </div>
      <button @click="reset">Reiniciar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        total: null,
        SeleccionarProp: null,
        CantidadProp: null,
        propinas: [3, 5, 7, 10, 13]
      };
    },
    methods: {
        calcularProp(propina) {
        if (this.total !== null) {
          this.SeleccionarProp = propina;
          this.CantidadProp = (this.total * propina) / 100;
        }
      },
      reset() {
        this.total = null;
        this.SeleccionarProp = null;
        this.CantidadProp = null;
      }
    },
    computed: {
      TotalConProp() {
        return (this.total !== null && this.CantidadProp !== null) ? (this.total + this.CantidadProp).toFixed(2) : null;
      }
    }
  };
  </script>
  
  <style scoped>

  </style>
  