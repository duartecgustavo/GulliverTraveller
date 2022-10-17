import { loginToGulliverTraveller } from "./firebase/gulliver-traveler.js";
import { getLogins } from "./firebase/gulliver-traveler.js";
import { insertInContent } from "./getLogins.js";

// LOGIN
const txtEmail = document.getElementById("email_1");
const txtSenha = document.getElementById("password_1");
const btnSubscribe = document.getElementById("btnSubscribe");

btnSubscribe.addEventListener("click", async () => {
    const myItens = getLogins();
    console.log("myItens", myItens)

    myItens.then((doc) => doc.forEach((el) => passLogin(el.data().email, el.data().senha)));


    function passLogin(email, senha) {
        if (email === txtEmail.value && senha === txtSenha.value) {
            // window.location.href = 'index.html';
        } else {
            // alert("Login invalido")
        }
    }

    const loginId = loginToGulliverTraveller();
    console.log("loginId", loginId)

});

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = {
        lat: 10.391049,
        lng: -75.479426
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
        title: 'Cartagena- Colômbia',
        icon: 'https://img.icons8.com/color/48/000000/marker--v1.png',
        Animation: google.maps.Animation.DROP
    });
}

// $('.main-carousel').flickity({
//     // options
//     cellAlign: 'left',
//     contain: true
// });