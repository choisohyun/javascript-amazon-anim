import { SearchBox } from "./searchBox.js";
import { AutoComplete } from "./autoComplete.js";
import { TemplateData } from "./templateData.js";

const jsonFileUrl = "../../server/productData.json";
let data;

const controllData = data => {
  const searchBox = new SearchBox();
  const autoComplete = new AutoComplete(JSON.parse(data));
  const searchTerm = document.querySelector(".search-term");

  searchTerm.addEventListener("input", event => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      let input = event.target.value;
      searchBox.inputEvent(input);
      autoComplete.searchChar(input);
    }, 300);
  });
};

(() => {
  fetch(jsonFileUrl)
    .then(response => response.json())
    .then(mockData => {
      data = mockData;
    })
    .then(() => new TemplateData())
    .then(() => controllData(data));
})();
