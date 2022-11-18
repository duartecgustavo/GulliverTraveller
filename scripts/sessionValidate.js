import { getLogins } from "./firebase/gulliver-traveler.js";

// LOGIN
const txtEmail = document.getElementById("email_1");
const txtSenha = document.getElementById("password_1");
const btnLogin = document.getElementById("btnLogin");

localStorage.setItem("acesso", false);

btnLogin.addEventListener("click", async () => {
  const myItens = getLogins();

  myItens.then((doc) =>
    doc.forEach((el) => passLogin(el.data().email, el.data().senha))
  );

  function passLogin(email, senha) {
    if (email === txtEmail.value && senha === txtSenha.value) {
      window.location.href = "index.html";
      localStorage.setItem("acesso", true);
    } else {
      alert("Login invalido");
    }
  }
});

// FIND USER

const contentLogins = document.querySelector(".contentLogins");

export function insertInContent(email, senha) {
  const element = `
      <p>Login: ${email}</p>
      <p>Senha: ${senha}</p>
  `;
  contentLogins.insertAdjacentHTML("beforeend", element);
}

const myItens = getLogins();
myItens.then((doc) =>
  doc.forEach((el) => insertInContent(el.data().email, el.data().senha))
);

// Visualizar senha

const btnVisualizar = document.getElementById("btnVisualizar");
const imputPassword = document.getElementById("password_1");

btnVisualizar.addEventListener("click", () => {
  if (imputPassword.type == "password") {
    imputPassword.type = "text";
  } else {
    imputPassword.type = "password";
  }
});

// Transicionar imagens área de login

const btnNextImage = document.getElementById("btnNextImage");
const btnBackImage = document.getElementById("btnBackImage");
let tagBody = document.getElementById("body");
let x = 1;

setInterval(() => {
  btnNextImage.click();
  console.log("foi");
}, 15000);

btnNextImage.addEventListener("click", () => {
  tagBody.classList.remove(`imagem${x}`);
  x++;
  if (x > 8) {
    x = 1;
  }
  tagBody.classList.add(`imagem${x}`);
});

btnBackImage.addEventListener("click", () => {
  tagBody.classList.remove(`imagem${x}`);
  x--;
  if (x < 1) {
    x = 8;
  }
  tagBody.classList.add(`imagem${x}`);
});
