'use strict'
/*
    @author:José Luis Peregrina Rosales

    We'll created a simple interactive piano.
*/
window.addEventListener('load', ()=>{
    const allKeys = document.querySelectorAll('.keyboard > .key');
    
    allKeys.forEach((key, index)=>{
        key.addEventListener('click', function(){
            console.log(this.innerHTML);
        });
    });
    console.log('Are you ready, Pino Man?');
});