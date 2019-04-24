'use strict'
/*
    @author:José Luis Peregrina Rosales
    @Others...

    We'll created a simple interactive piano.
*/
window.addEventListener('load', ()=>{
    const allKeys = document.querySelectorAll('.keyboard > .key');
    this.addEventListener('keypress', function(e){
        press(e.key.toLowerCase(), allKeys);
    });
});
function press(character, allKeys){
    switch(character){
        case 'a':
        case 's':
        case 'd':
        case 'f':
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'w':
        case 'r':
        case 't':
        case 'y':
        case 'i':
        findKey(character, allKeys);
        break;
    }
}

function findKey(e, allKeys){
    debugger;
    let arrayKeys = Array.from(allKeys);
    let found = arrayKeys.find(function(key){
        return key.id == e; 
    });
    pressEfect(found);
}
function pressEfect(element){
    element.classList.add('keyPressed');
    playSound(element);
    setTimeout(()=>{
        element.classList.remove('keyPressed');
    }, 500);
}
function playSound(element){
    
}