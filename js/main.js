/* Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. 
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch per altre 10 mail (sostituendo le altre)*/

const emailListEL = document.getElementById("email-list");
const buttonGenerateEmailEL = document.getElementById("button-generate-email");

const clearEmailList = () => {
  emailListEL.innerHTML = "";
};

const generateEmail = () => {
  clearEmailList();
  for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => response.json())
      .then((email) => {
        emailListEL.innerHTML += `<div class="card p-2 m-1">${email.response}</div>`;
      });
  }
};

buttonGenerateEmailEL.addEventListener("click", generateEmail);
