class ImageLoader extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="../components/img-loader/img-loader.css">
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    // handleScroll = () => {
    //     const navElement = this.shadowRoot.getElementById("nav-container")
    //     if (window.scrollY === 0) {
    //         navElement.classList.remove("shadow"); // Example: Add a class when at top
    //     } else {
    //         navElement.classList.add("shadow");
    //     }
    // };

    connectedCallback() { // similar to componentDidMount()
        // window.addEventListener("scroll", this.handleScroll);
    }

    disconnectedCallback() { // similar to componentWillUnmount()
        // window.removeEventListener("scroll", this.handleScroll);
    }
}

customElements.define("image-loader", ImageLoader)