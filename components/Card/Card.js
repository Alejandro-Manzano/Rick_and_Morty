import "./Card.css"

export const template = (character) => {
    let statusClass = "";
    if (character.status === "Alive") {
        statusClass = "alive";
    } else if (character.status === "Dead") {
        statusClass = "dead";
    } else if (character.status === "unknown") {
        statusClass = "unknown";
    }

    return `
        <div class="chracter-container">
            <a href="#" class="hover-img"><img src="${character.image}" alt="${character.name}"></a>
            <div class="name-conatiner">
                <h1>${character.name}</h1>
                <p>Status: <span class="${statusClass}">${character.status}</span></p>
                <p>Species: <span>${character.species}</span></p>
            </div>
        </div>
    `;
}
