import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
    // private negociacoes: Negociacao[] = []; funciona também

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> { // não permite alteração da lista com o readonly
        return this.negociacoes;
    }

    /* lista(): readonly Negociacao[] {  //funciona também
        return this.negociacoes;
    } */
}