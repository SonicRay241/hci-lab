class Footer extends HTMLElement {
    constructor() {
        super()

        this.open = false

        const template = html`
            <link rel="stylesheet" href="../components/sections/footer/footer.css">
            <footer>
                
            </footer>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    connectedCallback() { // similar to componentDidMount()

    }

    disconnectedCallback() { // similar to componentWillUnmount()

    }
}

customElements.define("footer-template", Footer)