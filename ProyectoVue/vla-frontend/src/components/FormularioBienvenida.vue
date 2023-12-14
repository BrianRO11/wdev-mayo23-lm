<template>
    <div class="container">
        <h1>Solicitando datos</h1>
        <p>Digite su nombre</p>
        <input class="form-control" id="textoNombre">
        <br>
        <button id="botonNombre" class="btn btn-primary"
            @click="VerNombre">Mostrar nombre</button>
        <br>
        <h3></h3>
    </div>
</template>

<script>
export default {
    methods: 
    {
        VerNombre()
        {
            var nombre = document.getElementById("textoNombre").value;
            alert("El nombre es: " + nombre)
        }
    }
}

</script>