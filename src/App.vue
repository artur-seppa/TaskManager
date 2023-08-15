<!--
  * Permite alocar multiplas colunas, sem espaçamento e com multiplas linhas
  * Apos, inserimos uma coluna com ocupação de 1/4 e 3/4
-->

<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro': modoEscuro}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="alterarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <Tarefa v-for="(task, index) in tarefas" :key="index" :task="task" />
        <Box v-if="verificaLista == 0">
          Você não esta muito produtivo hoje :(
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
/*
  no defineComponent definimos o nome de componente a ser
  exportado, como App. Alem disso definimos os componentes
  a serem utilizados no componente da pagina
*/
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/Formulario.vue';
import Tarefa from './components/Tarefa.vue';
import ITarefa from './interfaces/ITarefa';
import Box from './components/Box.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
    Tarefa,
    Box
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuro: false
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
    },

    alterarTema (modoEscuro: boolean) {
      this.modoEscuro = modoEscuro
    }
  }
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
  --bg-box: #FAF0CA;
}

main.modo-escuro{
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
  --bg-box: tomato;
}

.conteudo{
  background-color: var(--bg-primario);
}
</style>
