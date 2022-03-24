alert("Benvenuto nel gioco dei dadi, sfiderai il computer se otterrai il punteggio più alto avrai vinto");
alert("è il tuo turno, lancia il dado"); 
let utente = Math.floor( ( Math.random() * 6 ) + 1 );
console.log(utente);
alert("il dado segna il numero"); 
alert(utente);
let pc = Math.floor( ( Math.random() * 6 ) + 1 );
alert("il dado del computer segna il numero:");
alert(pc);
if(pc>utente){
    alert("Mi dispiace hai perso")
} else if (utente>pc){
    
}