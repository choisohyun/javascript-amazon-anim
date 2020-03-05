import { Carousel } from "./carousel.js";
import { TemplateData } from "./templateData.js";

const jsonFileUrl = "../../server/carouselData.json";

const carousel = { slideAll: document.querySelector(".slider") };
const arrowButtons = { buttons: document.querySelectorAll(".slide-btn > button") };
const width = { MAX_PANEL_SIZE: 760 };
let currentIndex = { START_CAROUSEL_INDEX: 1 };
let maxIndex = { MAX_CAROUSEL_SIZE: 5 };

const config = Object.assign(carousel, arrowButtons, width, currentIndex, maxIndex);

(() => {
  fetch(jsonFileUrl)
    .then(response => response.json())
    .then(carouselData => 
      const templateData = new TemplateData(carouselData);
    })
    .then(() => {
      const carousel = new Carousel(config);
    });
})();
