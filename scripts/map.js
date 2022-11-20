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