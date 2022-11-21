import { getLogins } from "./firebase/gulliver-traveler.js";

// LOGIN
const txtEmail = document.getElementById("email_1");
const txtSenha = document.getElementById("password_1");
const btnLogin = document.getElementById("btnLogin");
const myItens = getLogins();
const arrayUsers = [];

myItens.then((doc) => {
  myItens.then((doc) => doc.forEach((el) => handleArrayUsers(el.data())));
});

function handleArrayUsers(users) {
  arrayUsers.push({ email: users.email, senha: users.senha, id: users.id });
}

localStorage.setItem("acesso", false);
localStorage.setItem("idUser", '')

btnLogin.addEventListener("click", () => {
  arrayUsers.map(user => {
    if(user.email === txtEmail.value && user.senha === txtSenha.value){
      localStorage.setItem("acesso", true);
      localStorage.setItem("idUser",  user.id);
      window.location.href = "index.html";
    }
  })
});

// FIND USER

// const contentLogins = document.querySelector(".contentLogins");

// export function insertInContent(email, senha) {
//   const element = `
//       <p>Login: ${email}</p>
//       <p>Senha: ${senha}</p>
//   `;
//   contentLogins.insertAdjacentHTML("beforeend", element);
// }

// const myItens = getLogins();

myItens.then((doc) => {
  doc.forEach((el) => insertInContent(el.data().email, el.data().senha));
});

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
