class LazyImg extends HTMLElement {
    static observedAttributes = ["src"]

    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="../components/lazy-img/lazy-img.css">
            <div class="image-container" id="img">
                <!-- <img id="img"> -->
            </div>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    connectedCallback() { // similar to componentDidMount()

    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "src":
                window.addEventListener("load", () => {
                    const imgDivElement = this.shadowRoot.getElementById("img")
                    let image = new Image()
    
                    image.onload = () => {
                        imgDivElement.style.backgroundImage = `url(${image.src})`
                    }
    
                    image.src = newValue
                })
                break;

            default: console.warn(`Attribute ${name} is undefined.`);
        }
    }

    disconnectedCallback() { // similar to componentWillUnmount()
        // window.removeEventListener("scroll", this.handleScroll);
    }
}

customElements.define("lazy-img", LazyImg)