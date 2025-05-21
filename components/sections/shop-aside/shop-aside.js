class ShopAside extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/shop-aside/shop-aside.css">
            <aside class="shop-aside">
                <!-- <h1 class="">COLLECTIONS</h1> -->
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

    connectedCallback() {

    }
}

customElements.define("shop-aside", ShopAside)