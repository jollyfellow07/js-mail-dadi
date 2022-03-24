alert("Benvenuto nel gioco dei dadi, sfiderai il computer se otterrai il punteggio più alto avrai vinto");
//assegno numero all'utente
let utente = Math.floor( ( Math.random() * 6 ) + 1 );
alert("il tuo dado segna il numero:"); 
alert(utente);
//assegno numero al pc
let pc = Math.floor( ( Math.random() * 6 ) + 1 );
alert("il dado del computer segna il numero:");
alert(pc);

//controllo dei numeri 
if(pc>utente){
    alert("Mi dispiace, hai perso!")
} else if (utente>pc){
    alert("Complimenti, hai vinto!")
} else{
alert("avete pareggiato")
}