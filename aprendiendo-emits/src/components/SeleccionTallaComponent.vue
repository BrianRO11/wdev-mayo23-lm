<template>
    <h2>Seleciona la talla de camisa</h2>
    <button class="btn btn-primary" @click="seleccionarTalla('XS')">XS</button>
    <button class="btn btn-primary" @click="seleccionarTalla('S')">S</button>
    <button class="btn btn-primary" @click="seleccionarTalla('M')">M</button>
    <button class="btn btn-primary" @click="seleccionarTalla('L')">L</button>
    <button class="btn btn-primary" @click="seleccionarTalla('XL')">XL</button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent ({
        methods:
        {
            seleccionarTalla(talla : string): void{
                this.$emit('tallaSeleccionada', talla);
            }
        }
    }

    )
</script>