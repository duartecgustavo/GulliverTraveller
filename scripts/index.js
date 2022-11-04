// import { getLogins } from "./firebase/gulliver-traveler.js";

// Carregar dados Usuraios

const txtNome = document.getElementById("nome");
const txtEmail = document.getElementById("email");
const txtSenha = document.getElementById("senha");
const txtAcesso = document.getElementById("acesso");
const txtDataNascimento = document.getElementById("data_nascimento");
const txtCidade = document.getElementById("cidade");

// userInfos();

// function userInfos() {
//     const myItens = getLogins();
//     myItens.then((doc) => doc.forEach((el) => completeData(el.data().nome, el.data().email, el.data().senha, el.data().acessos, el.data().data_nascimentos, el.data().cidade)));
// }

function completeData(nome, email, senha, acesso, dataNascimento, cidade) {
  console.log("foi");
  txtNome.value = nome;
  txtEmail.value = email;
  txtSenha.value = senha;
  txtAcesso.value = acesso;
  txtDataNascimento.value = dataNascimento;
  txtCidade.value = cidade;
}

// Verificação de sessão de login

var logado = false;
console.log(localStorage.getItem("acesso"));
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
    console.log("foi");
  localStorage.setItem("acesso", false);
  window.location.href = "login.html";
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = {
    lat: 10.391049,
    lng: -75.479426,
  };

  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: "Cartagena- Colômbia",
    icon: "https://img.icons8.com/color/48/000000/marker--v1.png",
    Animation: google.maps.Animation.DROP,
  });
}

// $('.main-carousel').flickity({
//     // options
//     cellAlign: 'left',
//     contain: true
// });
