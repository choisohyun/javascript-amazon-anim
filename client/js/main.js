import { Carousel } from "./carousel.js";
import { TemplateData } from "./templateData.js";

const jsonFileUrl = "/client/js/mockData.json";

const carousel = { slideAll: document.querySelector(".slider") };
const arrowButtons = { buttons: document.querySelectorAll(".slide-btn > button") };
const width = { MAX_PANEL_SIZE: 760 };
let currentIndex = { START_CAROUSEL_INDEX: 1 };
let maxIndex = { MAX_CAROUSEL_SIZE: 5 };

const config = Object.assign(carousel, arrowButtons, width, currentIndex, maxIndex);

const run = () => {
  fetch(jsonFileUrl)
    .then(response => response.json())
    .then(data => {
      const templateData = new TemplateData(data);
    })
    .then(() => {
      const carousel = new Carousel(config);
    });
};

run();
