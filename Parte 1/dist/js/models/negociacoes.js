export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        /* lista(): readonly Negociacao[] {  //funciona também
            return this.negociacoes;
        } */
    }
    // private negociacoes: Negociacao[] = []; funciona também
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
