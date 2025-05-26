class NewArrivals extends HTMLElement {
    constructor() {
        super()

        this.index = 0;
        this.wait = false;

        const template = html`
            <link rel="stylesheet" href="/components/sections/new-arrivals/new-arrivals.css">
            <section class="new-arrivals">
                <carousel-container id="new-arrivals">
                    <span slot="title">
                        NEW ARRIVALS
                    </span>
                </carousel-container>
                <div class="view-link-container">
                    <a href="/shop.html" class="btn btn-outline" id="shop-btn">
                        <span>
                            See more
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                            <path d="M7 7h10v10"/>
                            <path d="M7 17 17 7"/>
                        </svg>
                    </a>
                </div>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/sections/new-arrivals/new-arrivals.css"
    }

    loadImages() {
        const newArrivals = getNewArrivals()
        const parent = this.shadowRoot.getElementById("new-arrivals");

        newArrivals.then((products) => {
            products.forEach((product) => {
                const card = document.createElement("carousel-card")
                card.setAttribute("slot", "content")
                card.setAttribute("data-title", product.name)
                card.setAttribute("data-price", "$" + product.price)
                card.setAttribute("data-img", product.img)
                card.setAttribute("data-id", product.id)

                parent.appendChild(card);
            })
            parent.updateButtonState()
        })
    }

    connectedCallback() {
        this.shopBtn = this.shadowRoot.getElementById("shop-btn")
        this.boundRouter = routerNavigate.bind(this.shopBtn)
        this.loadImages()

        this.shopBtn.addEventListener("click", (event) => this.boundRouter(event))
    }

    disconnectedCallback() {
        this.shopBtn.removeEventListener("click", (event) => this.boundRouter(event))
    }
}

customElements.define("new-arrivals", NewArrivals)