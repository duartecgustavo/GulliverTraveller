import { getLogins } from "./firebase/gulliver-traveler.js";

// LOGIN
const txtEmail = document.getElementById("email_1");
const txtSenha = document.getElementById("password_1");
const btnLogin = document.getElementById("btnLogin");

localStorage.setItem("acesso", false);

btnLogin.addEventListener("click", async () => {

  const myItens = getLogins();

  myItens.then((doc) => doc.forEach((el) => passLogin(el.data().email, el.data().senha)));


  function passLogin(email, senha) {
    if (email === txtEmail.value && senha === txtSenha.value) {
      window.location.href = 'index.html';
      localStorage.setItem("acesso", true);
    } else {
      alert("Login invalido")
    }
  }
});


// FIND USER

const contentLogins = document.querySelector(".contentLogins")

export function insertInContent(email, senha) {

  const element = `
      <p>Login: ${email}</p>
      <p>Senha: ${senha}</p>
  `
  contentLogins.insertAdjacentHTML("beforeend", element)
}

const myItens = getLogins();
myItens.then((doc) => doc.forEach((el) => insertInContent(el.data().email, el.data().senha)));
