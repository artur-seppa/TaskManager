<template>
    <section>
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
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { key } from '../../store/index';
import { ALTERA_PROJETO, ADICIONA_PROJETO, NOTIFICAR } from "../../store/mutations";
import { TipoNotificacao } from '@/interfaces/INotificacao';

export default defineComponent({
    name: 'FormularioProjetos',
    props: {
        id: {
            type: String
        }
    },
    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
            this.nomeProjeto = String(projeto?.nome || '');
        }
    },
    data() {
        return {
            nomeProjeto: ""
        }
    },
    methods: {
        salvar() {
            if (this.id) { // EDICAO
                this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeProjeto
                })
                this.$router.push('/projetos')
            } else { //INSERCAO
                this.store.commit(ADICIONA_PROJETO, this.nomeProjeto)
                this.store.commit(NOTIFICAR, {
                    titulo: 'Projeto',
                    texto: 'Novo projeto inserido com sucesso',
                    tipo: TipoNotificacao.SUCESSO
                })
            }

            this.nomeProjeto = ''
            this.$router.push('/projetos')
        }
    },
    setup() {
        const store = useStore(key)
        return {
            store
        }
    }
})
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>