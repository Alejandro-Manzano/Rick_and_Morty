import './Gallery.css'
import { template as Card } from '../../components/Card/Card'
import { Loading } from '../../components/Loading/Loading'
import { printTemplate as Buscador } from '../../components/Buscador/Buscador'
//import { template as Buttons } from '../../components/Buttons/Buttons'


const template = () => {
    return `
        <div class = "search-container">
        
        
        </div>

        <ul class="Gallery"></ul>

        
        
        <div class="spinner"></div>
    `
}

let pageNum = 1;
//let minPage = 1;
//let masMaxPage = 34;

const aOne = document.createElement("a");
const aTwo = document.createElement("a");

const back = document.createElement("button");
back.innerHTML = "Back";

const next = document.createElement("button");
next.innerHTML = "Next";

aOne.appendChild(back);
aTwo.appendChild(next);

const containerButton = document.createElement("div");

containerButton.setAttribute("class" , "container-buttons")
next.setAttribute("class" , "next");
back.setAttribute("class" , "back");

containerButton.append(aOne, aTwo);


const getCharacters = (pageNum) => {
    const container = document.querySelector(".Gallery")
    container.innerHTML = ""

    const spinnerLoading = document.querySelector(".spinner");
    spinnerLoading.innerHTML = Loading();

    fetch(`https://rickandmortyapi.com/api/character?page=${pageNum}`)
        .then(response => response.json())

        .then(data => {
            spinnerLoading.innerHTML = "";
            data.results.forEach(character => {
                const li = document.createElement("li");
                li.setAttribute("class", "card");
                li.innerHTML = Card(character);
                container.appendChild(li);
                
            });
           
            const main = document.querySelector("main");
            main.appendChild(containerButton);
        })
        
        .catch(error => container.innerHTML = "No se han podido cargar las fotos");

}

next.addEventListener("click" , () => {
    pageNum++;
    console.log(pageNum);
    getCharacters(pageNum);
    
})

back.addEventListener("click" , () => {
    pageNum--;
    getCharacters(pageNum);
})

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    pageNum = 1;
    getCharacters(pageNum);
    Buscador();
   
}

