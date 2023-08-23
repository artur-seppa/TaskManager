<!--
  * Permite alocar multiplas colunas, sem espaçamento e com multiplas linhas
  * Apos, inserimos uma coluna com ocupação de 1/4 e 3/4
-->

<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <div class="lista card">
        <Tarefa v-for="(task, index) in tarefas" :key="index" :task="task" />
        <Box v-if="verificaLista == 0">
            Você não esta muito produtivo hoje :(
        </Box>
    </div>
</template>
  
<script lang="ts">
/*
  no defineComponent definimos o nome de componente a ser
  exportado, como App. Alem disso definimos os componentes
  a serem utilizados no componente da pagina
*/
import { defineComponent } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import ITarefa from '../interfaces/ITarefa';
import Box from '../components/Box.vue'

export default defineComponent({
    name: 'TarefasView',
    components: {
        Formulario,
        Tarefa,
        Box
    },
    data() {
        return {
            tarefas: [] as ITarefa[]
        }
    },
    computed: {
        verificaLista(): number {
            return this.tarefas.length;
        }
    },
    methods: {
        salvarTarefa(task: ITarefa) {
            this.tarefas.push(task);
        }
    }
});
</script>

<style scoped>
    .card{
        margin: 0 1rem;
    }
</style>
  