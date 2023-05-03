import './Footer.css';

const template = () => {

    return `
    <h4>Alejandro Manzano Laforga</h4>
    <div class="icon-container">
    <a class="social-link" href="https://github.com/Alejandro-Manzano" target="_blank"><img class="social-icon" src="https://res.cloudinary.com/dul2s17m2/image/upload/v1682347453/github_rncbbv.png"></a>
    <a class="social-link" href="https://www.linkedin.com/in/alejandro-manzano-laforga-03b086272/" target="_blank"><img class="social-icon" src="https://res.cloudinary.com/dul2s17m2/image/upload/v1682347453/Linkedin_wkrf1h.png"></a>
    </div>
    `
}

export const printTemplate = () => {

    document.querySelector("footer").innerHTML = template();

}