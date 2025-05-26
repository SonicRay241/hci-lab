class ProductTemplate extends HTMLElement {
    constructor() {
        super()

        this.quantity = 1

        const template = html`
            <link rel="stylesheet" href="/components/sections/product-template/product-template.css">
            <section class="product-container" id="container">
                <div class="product-grid">
                    <div class="img skeleton" id="img-wrapper">
                        <lazy-img id="product-image"></lazy-img>
                    </div>
                    <div class="details" id="details">
                        <h1 id="product-name" class="skeleton">This Random Product</h1>
                        <p id="product-price" class="skeleton">$200.00</p>
                        <p id="product-desc" class="skeleton">Sint ab odit. Vel molestias debitis porro omnis velit sed. Facere sed et dicta modi. Neque dolorem voluptas voluptatem ut et voluptates corrupti non quaerat. Debitis exercitationem fuga et ut qui vel necessitatibus. Quia veritatis fuga sequi velit id voluptas non. Aut amet dolores.</p>
                        <div class="button-flex">
                            <button class="btn btn-outline primary">Order Now</button>
                            <button class="btn btn-outline">Add to Cart</button>
                            <div class="quantity">
                                <button class="btn btn-outline icon-text" id="subtract">-</button>
                                <div class="quantity-display">
                                    <p id="quantity"></p>
                                </div>
                                <button class="btn btn-outline icon-text" id="add">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/sections/product-template/product-template.css"
    }

    add() {
        if (this.quantity >= 9999) return
        this.quantity = ++this.quantity
        this.quantityDisplay.innerHTML = this.quantity
    }
    
    subtract() {
        if (this.quantity <= 1) return
        this.quantity = --this.quantity
        this.quantityDisplay.innerHTML = this.quantity
    }

    onResize() {
        const height = this.details.clientHeight
        const imgHeight = this.image.parentElement.clientHeight

        if (imgHeight + height <= 0) return

        if (window.innerWidth < 768) {
            this.parent.style.height = `${imgHeight + height}px`
            return
        }
        this.parent.style.height = height + "px"
    }

    connectedCallback() {
        this.container = this.shadowRoot.getElementById("container")
        this.details = this.shadowRoot.getElementById("details")
        this.name = this.shadowRoot.getElementById("product-name")
        this.price = this.shadowRoot.getElementById("product-price")
        this.desc = this.shadowRoot.getElementById("product-desc")
        this.image = this.shadowRoot.getElementById("product-image")
        this.quantityDisplay = this.shadowRoot.getElementById("quantity")
        this.addBtn = this.shadowRoot.getElementById("add")
        this.subtractBtn = this.shadowRoot.getElementById("subtract")

        const params = new URLSearchParams(window.location.search);
        const id = params.get("id")
        const fetcher = getProduct(id)

        fetcher.then((v) => {
            if (!v) {
                this.container.classList.add("not-found")
                this.container.innerHTML = `<h1 class="title-font">404</h1><p>Product not found</p>`

                return
            }
            this.name.innerHTML = v.name
            this.name.classList.remove("skeleton")
            this.price.innerHTML = "$" + v.price
            this.price.classList.remove("skeleton")
            this.desc.innerHTML = v.description
            this.desc.classList.remove("skeleton")
            this.image.parentElement.classList.remove("skeleton")
            this.image.src = v.img
            this.image.loadImage()
            this.onResize()
        })

        this.parent = this.parentElement

        this.quantityDisplay.innerHTML = this.quantity

        this.boundAdd = this.add.bind(this)
        this.boundSubtract = this.subtract.bind(this)

        this.addBtn.addEventListener("click", this.boundAdd)
        this.subtractBtn.addEventListener("click", this.boundSubtract)
        
        this.boundResize = this.onResize.bind(this)
        
        window.addEventListener("load", this.boundResize)
        window.addEventListener("spa:load", this.boundResize)
        window.addEventListener("resize", this.boundResize)
    }

    disconnectedCallback() {
        this.addBtn.removeEventListener("click", this.boundAdd)
        this.subtractBtn.removeEventListener("click", this.boundSubtract)
        this.parent.style.height = "auto"
        window.removeEventListener("resize", this.boundResize)
    }
}

customElements.define("product-template", ProductTemplate)