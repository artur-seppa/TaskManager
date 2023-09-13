<template>
    <div class="notificacoes">
        <article class="message" v-for="notificacao in notificacoes" :key="notificacao.id" :class="contexto[notificacao.tipo]">
            <div class="message-header">
                {{ notificacao.titulo }}
            </div>
            <div class="message-body">
                {{ notificacao.texto }}
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { TipoNotificacao } from '@/interfaces/INotificacao';

export default defineComponent({
    name: 'NotificacoesGlobal',
    data() {
        return {
            contexto: {
                [TipoNotificacao.ATENCAO]: 'is-warning',
                [TipoNotificacao.FALHA]: 'is-danger',
                [TipoNotificacao.SUCESSO]: 'is-success'
            }
        }
    },
    setup() {
        const store = useStore(key)
        return {
            notificacoes: computed(() => store.state.notificacoes)
        }
    }
})
</script>

<style scoped>
    .notificacoes{
        position: absolute;
        right: 0;
        width: 300px;
        padding: 8px;
        z-index: 1;
    }
</style>