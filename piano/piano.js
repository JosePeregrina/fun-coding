'use strict'
/*
    @author:José Luis Peregrina Rosales

    We'll created a simple interactive piano.
*/
window.addEventListener('load', ()=>{
    const allKeys = document.querySelectorAll('.keyboard > .key');
    this.addEventListener('keypress', function(e){
        presionar(e.key.toLowerCase(), allKeys);
    });
});
function presionar(character, allKeys){
    switch(character){
        case 'q':
        case 'w':
        case 'e':
        case 'r':
        case 't':
        case 'y':
        case 'u':
        case 'o':
        case 'p':
        playSound(character, allKeys);
        break;
    }
}

function playSound(e, allKeys){
    console.log(allKeys);
}