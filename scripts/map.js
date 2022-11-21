import { getDestiny } from "./firebase/gulliver-traveler.js";

initMap();


const myDestiny = getDestiny();
const arrayDestinies = [];
const arrayDestiny = {latitude: 0, longitude: 0, nome:""};


myDestiny.then((doc) => {
  myDestiny.then((doc) => doc.forEach((el) => handleArrayDestinies(el.data())));
});

function handleArrayDestinies(destiny) {
  arrayDestinies.push({ id_destino: destiny.id_destino, lat: destiny.latitude, lng: destiny.longitude, nome_destino: destiny.nome_destino});
  destinyInfos(arrayDestinies);
}


function destinyInfos(arrayDestinies) {
  arrayDestinies.map(destiny => {
    if(destiny.id_destino === localStorage.getItem("id_destino")){
      arrayDestiny = {latitude: destiny.lat, longitude: destiny.lng, nome_destino: destiny.nome_destino}
    }
  })
}


// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = {
      lat: -22.9035,
      lng: -43.2096,
    };
  
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      title: "Rio de Janeiro",
      icon: "https://img.icons8.com/color/48/000000/marker--v1.png",
      Animation: google.maps.Animation.DROP,
    });
  }