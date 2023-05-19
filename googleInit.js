window.initMap = initMap;
let map;
function initMap() {
  const centerPosition = { lat: 29.025885, lng: -13.602853 };
  const mainPosition = { lat: 29.12960607069736, lng: -13.60995008872115 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: centerPosition,
    zoom: 11,
    styles: [
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            lightness: 100,
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#C6E2FF",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#C5E3BF",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#D1D1B8",
          },
        ],
      },
    ],
    disableDefaultUI: true,
  });
  const svgMarker = {
    path: "M28.3962 70C28.3962 70 56.7925 44.079 56.7925 28.3962C56.7925 12.7134 44.079 0 28.3962 0C12.7134 0 0 12.7134 0 28.3962C0 44.079 28.3962 70 28.3962 70Z",
    fillColor: "#00B2A0",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 1,
    anchor: new google.maps.Point(30, 60),
  };
  new google.maps.Marker({
    position: mainPosition,
    map,
    title: "Hello World!",
    icon: svgMarker,
  });
}
