import IProjeto from "@/interfaces/IProjeto";
import INotificacao from "@/interfaces/INotificacao";
import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import {ADICIONA_PROJETO,  ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR} from './mutations'

interface Estado {
    projetos: IProjeto[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: []
    }, 
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO](state, projeto: IProjeto){
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto;
        },
        [EXCLUIR_PROJETO](state, id: string){
            /* 
                Busca os projetos com id diferente do id passado por parametro e
                aloca os valores para o array de projetos.
            */
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
        [NOTIFICAR](state, novaNotificacao: INotificacao){
            novaNotificacao.id = new Date().getTime();
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            }, 3000)
        }
    }
})