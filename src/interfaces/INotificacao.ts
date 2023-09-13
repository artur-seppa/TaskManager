export enum TipoNotificacao {
    SUCESSO, FALHA, ATENCAO
}

export default interface IProjeto{
    titulo: string,
    texto: string,
    tipo: TipoNotificacao,
    id: number
}