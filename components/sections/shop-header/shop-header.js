class ShopHeader extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/shop-header/shop-header.css">
            <section class="shop-header">
                <!-- <h1 class="title title-font">COLLECTIONS</h1> -->
                <search-bar id="search-bar" data-placeholder="Search collections..."></search-bar>
                <button class="aside-button btn btn-outline" id="aside-button">REFINE</button>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/sections/shop-header/shop-header.css"
    }

    static get deps() {
        return ["search-bar"]
    }

    connectedCallback() {
        this.searchBar = this.shadowRoot.getElementById("search-bar")
        this.asideBtn = this.shadowRoot.getElementById("aside-button")

        this.searchBar.onchange = v => this.onchange(v) // Idk why just using this.onchange doesn't work
        this.asideBtn.addEventListener("click", this.onclick.bind(this))
    }

    disconnectedCallback() {
        this.asideBtn.removeEventListener("click", this.onclick.bind(this))
    }
}

customElements.define("shop-header", ShopHeader)