<template>
    <div class="container">
        <h4>Digite numero 1</h4>
        <input class="form-control" v-model="dato1">
        <h4>Digite numero 2</h4>
        <input class="form-control" v-model="dato2">
        <h4>Seleccione la operacion</h4>
        <select class="form-select" v-model="operacion">
            <option value="+">Sumar</option>
            <option value="-">Restar</option>
            <option value="*">Multiplicar</option>
            <option value="/">Dividir</option>
        </select>
        <button class="btn btn-primary" v-on:click="RealizarOperacion">operacion</button>
        <h1>El resultado es: {{ resultado }}</h1>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            dato1: 0,
            dato2: 0,
            operacion: '+',
            resultado: 0
        }
    },
    methods:
    {
        RealizarOperacion()
        {
            switch(this.operacion)
            {
                case "+":
                    this.resultado = Number(this.dato1) + Number(this.dato2);
                    break;
                case "-":
                    this.resultado = Number(this.dato1) - Number(this.dato2);
                    break;
                case "*":
                    this.resultado = Number(this.dato1) * Number(this.dato2);
                    break;
                case "/":
                    this.resultado = Number(this.dato1) / Number(this.dato2);
                    break;
            }

        }
    }
}
</script>