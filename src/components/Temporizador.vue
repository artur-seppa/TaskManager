<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        <Botao @clicado="iniciar" texto="play" icone="fas fa-play" :desabilita="disableButton"/>
        <Botao @clicado="finalizar" texto="stop" icone="fas fa-stop" :desabilita="!disableButton"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import Botao from "./Botao.vue";

export default defineComponent({
    name: 'TemporizadorForms',
    emits: ['aoTemporizadorFinalizado'],
    components: {
        Cronometro,
        Botao
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            disableButton: false
        }
    },
    methods: {
        iniciar() {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000)
            this.disableButton = true;
        },
        finalizar() {
            clearInterval(this.cronometro);
            this.disableButton = false;
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    }
})
</script>