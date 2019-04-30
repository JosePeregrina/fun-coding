'use strict'
class Card{
    constructor(type){
        this._type = type;
        let body = document.createElement('div');
        let title = document.createElement('h5');
        title.innerHTML = `${this._type}`;
        body.appendChild(title);
        body.classList.add('card');
        this._format = body;
    }
    getType(){
        return this._type;
    }
    getFormat(){
        return this._format;
    }
    
}