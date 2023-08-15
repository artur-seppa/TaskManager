<template>
    <Box>
        <div class="columns">
            <div class="column is-7">
                {{ task.descricao || 'Tarefa sem descricao' }}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="task.tempoDecorrido" />
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import ITarefa from "@/interfaces/ITarefa";
import Box from "./Box.vue";

export default defineComponent({
    name: "TarefaForms",
    props: {
        task: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    },
    components: {
        Cronometro,
        Box
    }
})
</script>