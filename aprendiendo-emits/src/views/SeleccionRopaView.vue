<template>
    <div>
        <h1>Seleccione su talla de ropa</h1>
        <SeleccionTallaComponent @tallaSeleccionada = manejarTallaSeleccionada></SeleccionTallaComponent>
        <p>La talla seleccionada es: {{ tallaSeleccionadaPrueba }}</p>
        <h1>Aprendiendo Emit con Inputs</h1>
        <InputComponent @inputPersonalizado = "ManejarNombrePersona"></InputComponent>
        <p>{{ nombrePersonaPrueba }}</p>

    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import SeleccionTallaComponent from '@/components/SeleccionTallaComponent.vue';
    import InputComponent from '@/components/inputComponent.vue'

    export default defineComponent({
        components: {
            SeleccionTallaComponent,
            InputComponent
        },
        data()
        {
            return {
                tallaSeleccionadaPrueba: '' as string,
                nombrePersonaPrueba: '' as string
            }
        },
        methods:
        {
            manejarTallaSeleccionada(talla: string): void
            {
                this.tallaSeleccionadaPrueba = talla;
            },
            ManejarNombrePersona(nombre: any): void
            {
                console.log(nombre);
                this.nombrePersonaPrueba += nombre;
            }

        }
    }

    )
</script>