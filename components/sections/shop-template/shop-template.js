class ShopTemplate extends HTMLElement {
    constructor() {
        super()

        /**
         * @type {Product[]}
         */
        this.data = []
        this.page = 1

        const template = html`
            <link rel="stylesheet" href="/components/sections/shop-template/shop-template.css">
            <section class="shop-template">
                <shop-header id="shop-header"></shop-header>
                <div class="shop-container">
                    <shop-aside id="aside"></shop-aside>
                    <main class="shop-content" id="shop-content">
                        <div class="shop-scroll">
                            <div class="shop-grid" id="shop-grid">
                                <shop-card data-skeleton="true"></shop-card>
                                <shop-card data-skeleton="true"></shop-card>
                                <shop-card data-skeleton="true"></shop-card>
                                <shop-card data-skeleton="true"></shop-card>
                                <shop-card data-skeleton="true"></shop-card>
                                <shop-card data-skeleton="true"></shop-card>
                            </div>
                            <div class="load-container">
                                <button class="btn" id="load-btn">Load More</button>
                            </div>
                        </div>
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

    onResize() {
        if (window.innerWidth > 768) {
            this.onAside(false)
        }
    }

    renderCatalog(append = false) {
        if (!append) this.shopGrid.innerHTML = null

        this.data.forEach((product) => {
            const newCard = document.createElement("shop-card")

            newCard.setAttribute("data-title", product.name)
            newCard.setAttribute("data-price", "$" + product.price)
            newCard.setAttribute("data-img", product.img)
            newCard.setAttribute("data-id", product.id)

            this.shopGrid.appendChild(newCard)
        })
    }

    fetchData(page = 1, name = "") {
        if (page <= 1) {
            this.name = name
            this.page = 1
        }
        const fetcher = getProducts(page, page > 1 ? this.name : name)

        fetcher.then((products) => {
            this.data = products

            if (this.data.length < 12) this.loadButton.classList.add("hidden")
            else this.loadButton.classList.remove("hidden")

            this.renderCatalog(page > 1)
        })

        fetcher.catch(console.error)
    }

    loadMore() {
        this.fetchData(++this.page)
    }

    connectedCallback() {
        this.params = new URLSearchParams(window.location.search);

        this.shopHeader = this.shadowRoot.getElementById("shop-header")
        this.shopContent = this.shadowRoot.getElementById("shop-content")
        this.shopGrid = this.shadowRoot.getElementById("shop-grid")
        this.aside = this.shadowRoot.getElementById("aside")
        this.loadButton = this.shadowRoot.getElementById("load-btn")

        this.shopHeader.onchange = (name) => {
            this.params.set("search", name)
            history.pushState({}, "", window.location.pathname + "?" + this.params.toString())
            this.fetchData(1, name)
        }
        this.shopHeader.toggle = this.aside.toggle.bind(this.aside)

        this.aside.onToggle(this.onAside.bind(this))
        this.shopContent.addEventListener("click", () => {
            if (this.aside.open) {
                this.aside.toggle()
            }
        })

        const search = this.params.get("search") || ""

        this.fetchData(1, search)
        this.shopHeader.shadowRoot.getElementById("search-bar").change(search)

        window.addEventListener("resize", this.onResize.bind(this))
        this.loadButton.addEventListener("click", this.loadMore.bind(this))
    }

    disconnectedCallback() {
        this.shopContent.removeEventListener("click", () => {
            if (this.aside.open) {
                this.aside.toggle()
            }
        })

        window.removeEventListener("resize", this.onResize.bind(this))
        this.loadButton.removeEventListener("click", this.loadMore.bind(this))
    }
}

customElements.define("shop-template", ShopTemplate)