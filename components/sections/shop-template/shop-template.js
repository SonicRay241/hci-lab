class ShopTemplate extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/shop-template/shop-template.css">
            <section class="shop-template">
                <!-- <h1 class="title title-font">COLLECTIONS</h1> -->
                <shop-header id="shop-header"></shop-header>
                <div class="shop-container">
                    <shop-aside id="aside"></shop-aside>
                    <main class="shop-content" id="shop-content">
                        <button class="aside-button" id="aside-button">Refine</button>
                        
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

    /**
     * @param {boolean} state 
     */
    onAside(state) {
        if (state) {
            this.shopContent.classList.add("sidebar")
            return
        }

        this.shopContent.classList.remove("sidebar")
    }

    connectedCallback() {
        this.shopHeader = this.shadowRoot.getElementById("shop-header")
        this.shopContent = this.shadowRoot.getElementById("shop-content")
        this.asideBtn = this.shadowRoot.getElementById("aside-button")
        this.aside = this.shadowRoot.getElementById("aside")

        this.shopHeader.onchange = console.log // Search new products
        this.shopHeader.onclick =  this.aside.toggle.bind(this.aside)

        this.aside.onToggle(this.onAside.bind(this))
        this.asideBtn.addEventListener("click", this.aside.toggle.bind(this.aside))
        this.shopContent.addEventListener("click", () => {
            if (this.aside.open) {
                this.aside.toggle()
            }
        })

    }

    disconnectedCallback() {
        this.asideBtn.removeEventListener("click", this.aside.toggle.bind(this.aside))
        this.shopContent.removeEventListener("click", () => {
            if (this.aside.open) {
                this.aside.toggle()
            }
        })
    }
}

customElements.define("shop-template", ShopTemplate)