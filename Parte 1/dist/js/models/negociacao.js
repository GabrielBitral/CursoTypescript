export class Negociacao {
    constructor(_data, 
    // public readonly data elimina a necessidade de geters e não permite modificar
    _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        // programação defensiva = retornar uma variavel ao inves da referencia real, para não haver alterações por meio de métodos especificos de tipos de variavel
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
