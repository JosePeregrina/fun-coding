'use strict'
console.log('Card active...')
class Card{
    constructor(type='farmer'){
        switch(type.toLowerCase()){
            case 'emperator':
            case 'slave':
            case 'farmer':
            this._type = type;
            break;
            default:
            this._type = false;
        }
    }
    getType(){
        return this._type;
    }
}