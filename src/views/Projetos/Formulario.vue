<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>

        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeProjeto" class="label">
                    Nome do Projeto
                </label>
                <input type="text" class="input" v-model="nomeProjeto" id="nomeProjeto">
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { key } from '../../store/index';
import { routerKey } from 'vue-router';

export default defineComponent({
    name: 'FormularioProjetos',
    data () {
        return {
            nomeProjeto: ""
        }
    },
    methods: {
        salvar () {
            this.store.commit('ADICIONA_PROJETO', this.nomeProjeto)
            this.nomeProjeto = '' 
            this.$router.push('/projetos')
        }
    },
    setup () {
        const store = useStore(key)
        return {
            store
        }
    }
})
</script>

<style scoped>
    .projetos{
        padding: 1.25rem;
    }
</style>