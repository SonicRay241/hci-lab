class CarouselCard2 extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/carousel/carousel-card2.css">
            <div class="card slider-children">
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
        return "/components/carousel/carousel-card2.css"
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

        this.boundRouter = routerNavigate.bind(this)

        this.titleElement.innerHTML = this.title
        this.priceElement.innerHTML = this.price
        this.card.href = `/product.html?id=${this.id}`
        this.card.addEventListener("click", this.boundRouter)

        // Issues when no cache
        customElements.whenDefined("lazy-img").then(() => {
            this.imgElement = this.shadowRoot.getElementById("image")
            this.imgElement.setAttribute("src", this.img)
            this.imgElement.loadImage()
        })
    }

    disconnectedCallback() {
        this.card.removeEventListener("click", this.boundRouter)
    }
}

customElements.define("carousel-card", CarouselCard2)