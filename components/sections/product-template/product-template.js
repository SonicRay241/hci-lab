class ProductTemplate extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/product-template/product-template.css">
            <section class="about">
                <p id="e">aaaaa</p>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/sections/product-template/product-template.css"
    }

    connectedCallback() {
    }
}

customElements.define("product-template", ProductTemplate)