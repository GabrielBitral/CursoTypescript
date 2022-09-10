export class Negociacao {

    constructor(
        private _data: Date,
        // public readonly data elimina a necessidade de geters e não permite modificar
        private _quantidade: number, 
        private _valor: number
    ) {}

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
}