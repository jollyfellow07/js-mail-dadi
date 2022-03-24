let contatti = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com" ];
console.log(contatti);

alert("Dobbiamo verificare se puoi accedere al nostro database")
//dichiaro l'email da confrontare
let email = prompt("Digita la tua email");
console.log(email)
let trasporto

for(let i = 0; i<contatti.length; i++){
    if (email==contatti[i]){
        alert("La tua email è nel database, benvenut*");
        /* se l'email è presente assegnamo alla trasporto la stessa email per trasportarla fuori dal for */
        trasporto = email;
    } 
}
let risposta;
/*confrontiamo la trasporto con email, se è diversa eseguiamo l'allert*/
if (trasporto != email){
    alert("la tua email non è presente nel database");
    risposta = prompt("vuoi aggiungere la tua email?")
}

    if(risposta == "si") {
        let mailDaAggiungere= prompt('inserisci la nuova email');
        contatti.push(mailDaAggiungere);
        alert("hai aggiunto la tua email correttamente");
        console.log(contatti);
    } 