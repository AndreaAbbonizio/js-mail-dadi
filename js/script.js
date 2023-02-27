// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



//EX.1---------------------------------------------------------------------------
/*
-creare array con variabili email
-prendere il valore inserito dall'utente nell input 
? SE il valore insserito dall'utente è uguele a uno di quelli presenti nell'array
    ° stampa in pagina email e accesso consentito
: ALTRIMENTI 
    °stampare stringa "L' E-mail inserita è sbagliata"   
*/


let emailList = ["andreaabbonizio@gmail.com" , "mariorossi@gmail.com" , "lucabianchi@gmail.com" , "matteoverdi@gmail.com" , "gianlucarossi@gmail.com" ];

let emailInputEl = document.getElementById("emailInput");

let emailButtonEl = document.getElementById("emailButton");

let emailUser;

let loginUserEl = document.getElementById("loginUser");


emailButtonEl.addEventListener("click" , function(){
    emailUser = emailInputEl.value;

    for(i = 0 ; i < emailList.length ; i++){
        if(emailUser == emailList[i]){
            loginUserEl.innerText = "L'email inserita è corretta";
            break;
        }
            
        if(emailUser != emailList[i]){
            loginUserEl.innerText = "Hai inserito una email errata";
        }
    }
})




//EX.2----------------------------------------------------------------------------------------

/*

-Creare variabile bottone
-AL CLICK della variabile bottone
    ?SE la variabile dell'utente  è maggiore della variabile del computer
        -stampare in pagina il risultato e vittoria utente
    ALTRIMENTI 
        -stampare in pagina il risultato e sconfitta utente 
*/


let playButtonEl = document.getElementById("playButton");
let textPlayEl = document.getElementById("textPlay");

playButtonEl.addEventListener("click", function(){
    let userNumber = Math.floor((Math.random() * 6) + 1);
    let computerNumber = Math.floor((Math.random() * 6) + 1);
    if(userNumber > computerNumber){
        textPlayEl.innerHTML = "Il tuo numero è  " + userNumber + " , il numero del computer è  " + computerNumber + " , complimenti hai vinto."
    }else{
        textPlayEl.innerHTML = "Il tuo numero è  " + userNumber + " , il numero del computer è  " + computerNumber + " , mi dispiace hai perso."
    }
})