'use strict'
class Card{
    constructor(type){
        this._type = type;
        let body = document.createElement('div');
        let text = document.createTextNode(this._type);
        body.appendChild(text);
        this._format = body;
    }
    getType(){
        return this._type;
    }
    getFormat(){
        return this._format;
    }
    
}