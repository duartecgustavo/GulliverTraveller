import { getLogins } from "./firebase/gulliver-traveler.js";

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
