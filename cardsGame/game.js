'use strict'
/*
    After seeing the anime Kaiji, I (José Luis) propouse this game, with it mechanics
    and rules. 

    The context is the follow.
    -Exist two decks (The emperator's deck) and (the slave's deck).
    -Each deck is maded by 5 cards, 4 farmers and the emperator for one (emperator's deck)
    and the slave for the other (the slave's deck).
    The rules
    -The players only can select one card and throw per stage.
    -After each stage, the decks will be switched.
    -The player who beat the other on the mayority of stages, win.
    Gameplay
    -The Emperator defeat the farmers.
    -The farmers are equals  (draw).
    -The farmers defeat the salve.
    -The slave defeat the Emperator.

*/
window.addEventListener('load', ()=>{
    const field_player = document.querySelector('#computer');
    const field_computer = document.querySelector('#player');
    let emperatorDeck = new Array();
    let slaveDeck = new Array();
    for(let i = 0; i < 5; i++){
        if(i == 4){
            emperatorDeck.push(creatCard('emperator'));
            slaveDeck.push(creatCard('slave'));
        }else{
        emperatorDeck.push(creatCard());
        slaveDeck.push(creatCard());
        }
    }
     for(let i in emperatorDeck && slaveDeck){
        field_player.appendChild(emperatorDeck[i].getFormat());
        field_computer.appendChild(slaveDeck[i].getFormat());
     }
});
function creatCard(type = 'farmer'){
    return new Card(type);
}