import { getLogins } from "./firebase/gulliver-traveler.js";
import { getDestiny } from "./firebase/gulliver-traveler.js";


// Carregar dados Usuraios
const myItens = getLogins();

const divNome = document.getElementById("nome");
const divCampoNomeUsuario = document.getElementById("campo_nome_usuario");
const divCampoNivelUsuario = document.getElementById("campo_nivel_usuario");

const txtNome = document.getElementById("campo_nome");
const txtEmail = document.getElementById("email");
const txtSenha = document.getElementById("senha");
const txtAcesso = document.getElementById("acesso");
const txtGenero = document.getElementById("genero");
const txtDataNascimento = document.getElementById("data_nascimento");
const txtCidade = document.getElementById("cidade");
const arrayUsers = [];


localStorage.setItem("id_destino", 0);


// DADOS USUARIO
myItens.then((doc) => {
  myItens.then((doc) => doc.forEach((el) => handleArrayUsers(el.data())));
});

function handleArrayUsers(users) {
  arrayUsers.push({ email: users.email, senha: users.senha, id: users.id, nome: users.nome, cidade: users.cidade, data_nascimento: users.data_nascimento, nivel_acesso: users.acesso, genero: users.genero });
  userInfos(arrayUsers);
}

function userInfos(arrayUsers) {
  arrayUsers.map(user => {
    if(user.id === localStorage.getItem("idUser")){
      completeData(user.nome, user.email, user.senha, user.data_nascimento, user.cidade, user.nivel_acesso, user.genero)
    }
  })
}

function completeData(nome, email, senha, dataNascimento, cidade, acesso, genero) {
  divNome.innerText = nome;
  divCampoNomeUsuario.innerText = nome;
  divCampoNivelUsuario.innerText = acesso;
  txtNome.value = nome;
  txtEmail.value = email;
  txtSenha.value = senha;
  txtAcesso.value = acesso;
  txtDataNascimento.value = dataNascimento;
  txtCidade.value = cidade;
  txtGenero.value = genero;
}
// DADOS USUARIO


// Verificação de sessão de login

var logado = false;
if (localStorage.getItem("acesso") == "true") {
  logado = true;
}

if (logado != true) {
  alert("Você não esta autenticado!");
  window.location.href = "login.html";
}

// LOG OUT
const btnLogout = document.getElementById("btnLogout");
btnLogout.addEventListener("click", () => {
  localStorage.setItem("acesso", false);
  window.location.href = "login.html";
});


// Visualizar senha

const btnVisualizar = document.getElementById("btnVisualizar");
const imputPassword = document.getElementById("senha");

btnVisualizar.addEventListener("click", () => {
  if (imputPassword.type == "password") {
    imputPassword.type = "text";
  } else {
    imputPassword.type = "password";
  }
});

$(".main-carousel").flickity({
  // options
  cellAlign: "left",
  contain: true,
});

