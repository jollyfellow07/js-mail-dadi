let contatti = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com" ];
console.log(contatti);

alert("Dobbiamo verificare se puoi accedere al nostro database")
let email = prompt("Digita la tua email");
console.log(email)
let variabileConfronto

for(let i = 0; i<contatti.length; i++){
    if (email==contatti[i]){
        alert("La tua email è nel database");
        variabileConfronto = email;
    } 
}

if (variabileConfronto != email){
    alert("la tua email non è presente nel database");
}