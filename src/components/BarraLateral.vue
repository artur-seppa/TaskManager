<!--
    Em vue os componentes sao divididos em ate 3 partes:
    * codigo html no Template
    * script para inserir javascript ou typescript
    * style para inserir o estulo css
-->

<template>
    <header>
        <h1>
            <img src="../assets/pomodoro_logo.png" alt="">
        </h1>
        <button class="button" @click="alterarTema">
            {{ textoBotao }}
        </button>
    </header>
</template>

<script lang="ts">
    /* 
        Define component: define o componente a ser exportado.
        Nas configuracoes de exportacao dele, definimos o seu nome
        a ser usado como BarraLateral para que outras paginas possam
        fazer seu uso.
    */
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'BarraLateral',
        emits: ['aoTemaAlterado'],
        data(){
            return{
                modeEscuro: false
            }
        },
        computed: {
            textoBotao() : string{
                if(this.modeEscuro){
                    return 'Desativar modo escuro';
                } else {
                    return 'Ativar modo escuro';
                }
            }
        },
        methods: {
            alterarTema(){
                this.modeEscuro = !this.modeEscuro
                this.$emit('aoTemaAlterado', this.modeEscuro)
            }
        }
    })
</script>

<style>
    header {
        padding: 1rem;
        background: #0d3b66;
        width: 100%;
        height: 100vh;
        text-align: center;
    }

    img {
        width: 10rem;
        height: 10rem;
    }

    @media only screen and (max-width: 768px) {
        header{
            padding: 2.5rem;
            height: auto;
        }
    }
</style>