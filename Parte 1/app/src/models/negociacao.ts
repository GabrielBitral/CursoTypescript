import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao>{

    constructor(
        private _data: Date,
        // public readonly data elimina a necessidade de geters e não permite modificar
        private _quantidade: number, 
        private _valor: number
    ) { }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade= parseInt(quantidadeString);
        const valor = parseFloat(valorString);;
        return new Negociacao(date, quantidade, valor);
    }

    get data(): Date {
        // programação defensiva = retornar uma variavel ao inves da referencia real, para não haver alterações por meio de métodos especificos de tipos de variavel
        const data = new Date(this._data.getTime());
        return data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        return this._quantidade * this._valor;
    }

    public paraTexto(): string {
       return`
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}