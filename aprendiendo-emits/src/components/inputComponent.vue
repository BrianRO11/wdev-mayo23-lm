<template>
    <input type="text" @input="CaptarLetra" form="control">
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent ({
        methods:
        {
            CaptarLetra (event : any): void
            {
                console.log(event)
                this.$emit('inputPersonalizado', event.data);
            }
        }
    }

    )
</script>