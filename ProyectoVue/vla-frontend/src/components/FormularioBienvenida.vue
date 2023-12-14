<template>
    <div class="container">
        <h1>Solicitando datos</h1>
        <p>Digite su nombre</p>
        <input class="form-control" v-model="nombrePersona">
        <br>
        <button class="btn btn-primary">Mostrar nombre</button>
        <br>
        <h3>{{ nombrePersona }}</h3>
    </div>
</template>

<script>
export default {
    data()
    {
        return{
            nombrePersona: ''
        }
    }
}

</script>