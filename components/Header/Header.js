import './Header.css'

const template = () => {

    return `
        <div>
            <img src="https://res.cloudinary.com/dul2s17m2/image/upload/v1682957195/logo_zr3hxt.png" class="logo" alt="Phototype logo"/>
        </div>
    
        <ul>
        <li>
            <a href="#null" id="homelink">Home</a>
        </li>
        <li>
            <a href="#null" id="gallerylink">Gallery</a>
        </li>
        <li>
            <a href="#null" id="aboutlink">About</a>
        </li>
    </ul>
    `

}

export const printTemplate = () => {
    document.querySelector("header").innerHTML = template();
}