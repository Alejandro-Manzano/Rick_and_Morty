import "./Buscador.css";
import { template as Card } from "../Card/Card";


const template = () => {
  return `
    <input type="text" placeholder="Rick Sanchez" class="searchInput"/>
    <a href="#"><button class="button-search">Search</button></a>
  `;
};

const event = (pageNum) => {
  const button = document.querySelector(".button-search");

  button.addEventListener("click", async (event) => {
    const ulList = document.querySelector(".Gallery");
    ulList.innerHTML = "";

    const input = document.querySelector(".searchInput");

    // Actualiza la URL de la API con el número de página actual
    const data = await fetch(`https://rickandmortyapi.com/api/character`);
    const dataJson = await data.json();

    dataJson.results.forEach((character) => {
      if (character.name.toLowerCase().includes(input.value)) {
        const li = document.createElement("li");
        li.innerHTML = Card(character);
        ulList.appendChild(li);
      }
    });
    ; // Incrementa la página
  });
};

export const printTemplate = () => {
  document.querySelector(".search-container").innerHTML = template();
  event();
};
