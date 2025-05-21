class NewArrivals extends HTMLElement {
    constructor() {
        super()

        this.index = 0;
        this.wait = false;
        this.amount = 14

        this.images = Array.apply(null, Array(this.amount)).map(() => {
            return `
                <img src="/assets/image/ver2.jpeg">
            `
        }).join("")

        const template = html`
            <link rel="stylesheet" href="/components/sections/new-arrivals/new-arrivals.css">
            <section class="new-arrivals">
                <carousel-container id="new-arrivals">
                    <span slot="title">
                        NEW ARRIVALS
                    </span>
                </carousel-container>
                <div class="view-link-container">
                    <a onclick="routerNavigate(event)" href="/shop.html?filter=latest" class="btn btn-ghost">
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
                const card = document.createElement("carousel-card");
                card.setAttribute("slot", "content");
                card.classList.add("slider-children");
    
                const img = document.createElement("lazy-img");
                img.setAttribute("slot", "img");
                img.setAttribute("src", "/assets/image/ver2.jpeg"); // Placeholder image
                img.loadImage()
    
                const title = document.createElement("span");
                title.setAttribute("slot", "title");
                title.textContent = product.name;
    
                const price = document.createElement("span");
                price.setAttribute("slot", "price");
                const priceText = document.createElement("p");
                priceText.textContent = "$" + product.price;
                price.appendChild(priceText);
    
                // Append all to <carousel-card>
                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(price);
    
                // Finally, append <carousel-card> to <carousel-parent>
                parent.appendChild(card);
            })
            parent.updateButtonState()
        })
    }

    connectedCallback() { // similar to componentDidMount()
        // Fetch data and append it
        // window.addEventListener("load", this.loadImages.bind(this))
        // window.addEventListener("spa:load", this.loadImages.bind(this))
        this.loadImages()
    }

    disconnectedCallback() { // similar to componentWillUnmount()
    }
}

customElements.define("new-arrivals", NewArrivals)