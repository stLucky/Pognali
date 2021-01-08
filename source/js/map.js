const DESKTOP_WIDTH = "(min-width: 1440px)";
const TABLET_WIDTH = "(min-width: 768px)";

const isUpperDesktop = window.matchMedia(DESKTOP_WIDTH).matches;
const isUpperTablet = window.matchMedia(TABLET_WIDTH).matches;
const mapCenter = isUpperDesktop ? [59.9375, 30.324] : [59.938635, 30.323118];
const mapZoom = isUpperDesktop ? 16 : isUpperTablet ? 15.5 : 15;

const mapSettings = {
  center: mapCenter,
  zoom: mapZoom,
  controls: [

    'zoomControl',
    'rulerControl',
    'routeButtonControl',
    'trafficControl',
    'typeSelector',
    'fullscreenControl',
  ]
}

const mapControlSettings = {
  rulerControlPosition: {
    bottom: isUpperTablet ? "70px" : "50px",
    right: "10px"
  },
  fullscreenControlPosition: {
    top: isUpperTablet ? "80px" : "40px",
    right: "10px"
  },
  typeSelectorSize: "small",
  typeSelectorPosition: {
    top: "140px",
    right: "10px"
  },
  trafficControlSize: "small",
  trafficControlPosition: {
    top: "170px",
    right: "10px"
  },
  routeButtonControlSize: "small",
  routeButtonControlPosition: {
    top: "200px",
    right: "10px"
  },
}

const iconSettings = {
  iconLayout: "default#image",
  iconImageHref: "img/icon-map.svg",
  iconImageSize: isUpperTablet ? [45, 45] : [40, 40],
  iconImageOffset: isUpperTablet ? [-20, -40] : [-20, -30]
}

function init() {
  const myMap = new ymaps.Map("map", mapSettings, mapControlSettings);

  const myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
    balloonContent: "Погнали?"
  }, iconSettings);

  myMap.geoObjects.add(myPlacemark);
}

ymaps.ready(init);
