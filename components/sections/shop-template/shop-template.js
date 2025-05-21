class ShopTemplate extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/shop-template/shop-template.css">
            <section class="shop-template">
                <!-- <h1 class="title title-font">COLLECTIONS</h1> -->
                <shop-header id="shop-header"></shop-header>
                <div class="shop-container">
                    <shop-aside></shop-aside>
                    <main>
                        
                    </main>
                </div>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/sections/shop-template/shop-template.css"
    }

    static get deps() {
        return ["shop-header", "shop-aside"]
    }

    connectedCallback() {
        this.shopHeader = this.shadowRoot.getElementById("shop-header")
        this.shopHeader.onchange = console.log // Search new products
    }
}

customElements.define("shop-template", ShopTemplate)