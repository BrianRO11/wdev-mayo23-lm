<template>
    <h1>Hola: {{ nombrePersona }}</h1>
    <h1>Estoy en:{{ lugarClase }}</h1>
    <h1>En el horario:{{ horarioClase }}</h1>
</template>

<script>
export default {

    name: 'SaludarPublico',
    props:
    {
        nombrePersona: String, 
        lugarClase: String,
        horarioClase: String
    }
}
</script>