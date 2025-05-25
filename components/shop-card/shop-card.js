class ShopCard extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/shop-card/shop-card.css">
            <div class="card">
                <a class="container" id="card">
                    <div class="img">
                        <lazy-img id="image"></lazy-img>
                    </div>
                    <p id="title">Title</p>
                    <p id="price">Price</p>
                </a>
            </div>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/shop-card/shop-card.css"
    }

    connectedCallback() {
        this.skeleton = this.dataset.skeleton || ""
        this.title = this.dataset.title || ""
        this.price = this.dataset.price || ""
        this.img = this.dataset.img || ""
        this.id = this.dataset.id || ""
        // this.img = "/assets/image/shoe.avif"

        this.titleElement = this.shadowRoot.getElementById("title")
        this.priceElement = this.shadowRoot.getElementById("price")
        this.imgElement = this.shadowRoot.getElementById("image")
        this.card = this.shadowRoot.getElementById("card")

        if (this.skeleton != "") {
            this.titleElement.classList.add("skeleton")
            this.priceElement.classList.add("skeleton")
            this.imgElement.parentElement.classList.add("skeleton")
        }

        this.titleElement.innerHTML = this.title
        this.priceElement.innerHTML = this.price
        this.card.href = `/product.html?id=${this.id}`
        this.card.addEventListener("click", routerNavigate.bind(this))

        // Issues when no cache
        customElements.whenDefined("lazy-img").then(() => {
            this.imgElement = this.shadowRoot.getElementById("image")
            this.imgElement.setAttribute("src", this.img)
            this.imgElement.loadImage()
        })
    }

    disconnectedCallback() {
        this.card.removeEventListener("click", routerNavigate.bind(this))
    }
}

customElements.define("shop-card", ShopCard)