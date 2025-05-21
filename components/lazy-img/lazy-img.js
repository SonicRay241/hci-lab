class LazyImg extends HTMLElement {
    static observedAttributes = ["src"]

    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/lazy-img/lazy-img.css">
            <div class="image-container" id="img">
                <!-- <img id="img"> -->
            </div>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    loadImage() {
        const imgDivElement = this.shadowRoot.getElementById("img")
        let image = new Image()

        image.onload = () => {
            imgDivElement.style.backgroundImage = `url(${image.src})`
        }

        image.src = this.src
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.src = newValue

        switch (name) {
            case "src":
                window.addEventListener("load", this.loadImage.bind(this))
                window.addEventListener("spa:load", this.loadImage.bind(this))
                break;

            default: console.warn(`Attribute ${name} is undefined.`);
        }
    }
}

customElements.define("lazy-img", LazyImg)