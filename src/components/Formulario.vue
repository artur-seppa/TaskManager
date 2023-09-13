<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="formulario para criacao de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar ?" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { computed, defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { NOTIFICAR } from "../store/mutations";
import { TipoNotificacao } from '@/interfaces/INotificacao';

export default defineComponent({
    name: 'FormularioPomodoro',
    emits: ['aoSalvarTarefa'],
    components: {
        Temporizador
    },
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            const projeto =  this.projetos.find(proj => proj.id == this.idProjeto);

            if(!projeto){
                this.store.commit(NOTIFICAR, {
                    titulo: 'Erro',
                    texto: 'Selecione um projeto antes de finalizar a tarefa',
                    tipo: TipoNotificacao.FALHA
                })
                return;
            }

            this.$emit('aoSalvarTarefa', {
                tempoDecorrido: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto)
            })
            this.descricao = '';
        }
    },
    setup() {
        const store = useStore(key)
        return {
            projetos: computed(() => store.state.projetos),
            store
        }
    }
})
</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>