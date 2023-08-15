<template>
    <button class="button" @click="clicado" :disabled="desabilita">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{ texto }}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BotaoForms',
    emits: ['clicado'],
    props: {
        texto: {
            type: String,
            required: true
        },
        desabilita: {
            type: Boolean,
            required: true
        },
        icone: {
            type: String,
            required: true
        }
    },
    methods: {
        clicado() {
            this.$emit('clicado');
        }
    }
})
</script>