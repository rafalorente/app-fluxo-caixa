export interface Lancamento{
    idLancamento : number,
    idCliente: number,
    dataLancamento: Date,
    valorLancamento: number,
    tipoConta: number,
    descricaoConta: string,
    classificacaoConta: number
}