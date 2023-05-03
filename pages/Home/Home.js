import "./Home.css"

const template = () => {
  return `
    <section class="home">
        <h2>Welcome to the Rick and Morty website</h2>
    </section>
    `
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
}
