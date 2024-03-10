<template>
    <div class="container">
        <select class="form-control" v-model="frutaSeleccionada ">
            <option v-for="(fruta, index) in frutas " :key="index" :value="fruta" >
                {{ fruta }}</option>
        </select>
        <h4>La fruta seleccionada es: {{ frutaSeleccionada }}</h4>
    </div>
</template>

<script>
    export default{
        data()
        {
            return{
                frutas: ["Manzana", "Banano", "Naranja", "Uva", "Sandia"],
                frutaSeleccionada: ""
            };
        }
    }
</script>