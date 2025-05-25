class ShopAside extends HTMLElement {
    constructor() {
        super()

        this.open = false
        this.wait = false

        /**
         * @type {((state: boolean) => void)[]}
         */
        this.toggleList = []

        const template = html`
            <link rel="stylesheet" href="/components/sections/shop-aside/shop-aside.css">
            <aside class="shop-aside" id="shop-aside">
                <div class="close-container">
                    <button class="btn btn-ghost btn-icon" id="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x">
                            <path d="M18 6 6 18"/>
                            <path d="m6 6 12 12"/>
                        </svg>
                    </button>
                </div>
                <drop-down>
                    <span class="aside-title" slot="title">Sort By</span>
                    <div class="aside-options" slot="body">
                        <button class="aside-option">Best Seller</button>
                        <button class="aside-option">Sort by price asc</button>
                        <button class="aside-option">Sort by price desc</button>
                    </div>
                </drop-down>
                <hr>
                <drop-down>
                    <span class="aside-title" slot="title">Category</span>
                    <div class="aside-options" slot="body">
                        <button class="aside-option">Accessories</button>
                        <button class="aside-option">Bags</button>
                        <button class="aside-option">Essentials</button>
                        <button class="aside-option">Gifts</button>
                        <button class="aside-option">Holiday collection</button>
                        <button class="aside-option">New in</button>
                        <button class="aside-option">Ready to wear</button>
                        <button class="aside-option">Travel</button>
                        <button class="aside-option">Women's collection</button>
                    </div>
                </drop-down>
                <hr>
                <drop-down>
                    <span class="aside-title" slot="title">Size</span>
                    <div class="aside-options" slot="body">
                        <button class="aside-option">XXS</button>
                        <button class="aside-option">XS</button>
                        <button class="aside-option">S</button>
                        <button class="aside-option">M</button>
                        <button class="aside-option">L</button>
                        <button class="aside-option">20</button>
                        <button class="aside-option">TU</button>
                        <button class="aside-option">XL</button>
                        <button class="aside-option">XXL</button>
                        <button class="aside-option">XXXL</button>
                    </div>
                </drop-down>
                <hr>
            </aside>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/sections/shop-aside/shop-aside.css"
    }

    waitAnimation() {
        this.wait = true

        setTimeout(() => {
            this.wait = false
        }, 350)
    }
    
    /**
     * 
     * @param {(state: boolean) => void} fn 
     */
    onToggle(fn) {
        this.toggleList.push(fn)
    }

    toggle() {
        if (this.wait) return
        this.waitAnimation()

        if (this.open) {
            this.aside.classList.remove("open")
        }
        else {
            this.aside.classList.add("open")
        }
        
        this.open = !this.open

        this.toggleList.forEach((fn) => {
            fn(this.open)
        })
    }

    onResize() {
        if (window.innerWidth >= 768) {
            this.aside.classList.remove("open")
            this.open = false
        }
    }

    connectedCallback() {
        this.aside = this.shadowRoot.getElementById("shop-aside")
        this.closeBtn = this.shadowRoot.getElementById("close-btn")
        
        window.addEventListener("resize", this.onResize.bind(this))
        this.closeBtn.addEventListener("click", this.toggle.bind(this))
    }
    
    disconnectedCallback() {
        window.removeEventListener("resize", this.onResize.bind(this))
        this.closeBtn.removeEventListener("click", this.toggle.bind(this))
    }
}

customElements.define("shop-aside", ShopAside)