import "./About.css"

const template = () => {
  return `
    <section class="about">
        <h2>About:</h2>
        <p>
        Esta aplicación consulta imágenes de la api Rick y Morty y muestra 30 imágenes de diversos personajes
        </p>
    </section>
    `
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
}
