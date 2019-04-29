'use strict'
class Deck{
    constructor(){
        this._maxAmoung = 4;
        this._elements = new Array();
    }
    addElement(obj){
        this._elements.push(obj);
    }
    getLimit(){
        return this._maxAmoung;
    }
}
