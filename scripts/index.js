import { getLogins } from "./firebase/gulliver-traveler.js";

// Carregar dados Usuraios

const divNome = document.getElementById("nome");
const txtNome = document.getElementById("nome");
const txtEmail = document.getElementById("email");
const txtSenha = document.getElementById("senha");
const txtAcesso = document.getElementById("acesso");
const txtDataNascimento = document.getElementById("data_nascimento");
const txtCidade = document.getElementById("cidade");

userInfos();

function userInfos() {
  const myItens = getLogins();

  myItens.then((doc) =>
    doc.forEach((el) =>
      completeData(
        el.data().nome,
        el.data().email,
        el.data().senha,
        el.data().acessos,
        el.data().data_nascimentos,
        el.data().cidade
      )
    )
  );
}

function completeData(nome, email, senha, acesso, dataNascimento, cidade) {
  divNome.innerText = nome;
  txtNome.value = nome;
  txtEmail.value = email;
  txtSenha.value = senha;
  txtAcesso.value = acesso;
  txtDataNascimento.value = dataNascimento;
  txtCidade.value = cidade;
}

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


$(".main-carousel").flickity({
  // options
  cellAlign: "left",
  contain: true,
});
