class Discover extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/discover/discover.css">
            <div class="wrapper">
                <div class="image">
                    <lazy-img id="img" src="/assets/image/shirt.avif"></lazy-img>
                </div>
                <div class="title-font texts">
                    <h2 class="title">CATEGORIES</h2>
                    <div id="list">
                        <a onclick="routerNavigate(event)" class="btn btn-outline" href="/shop.html?search=hat" data-img="/assets/image/hat.avif">
                            <span>HATS</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                <path d="M7 7h10v10"/>
                                <path d="M7 17 17 7"/>
                            </svg>
                        </a>
                        <a onclick="routerNavigate(event)" class="btn btn-outline" href="/shop.html?search=shirt" data-img="/assets/image/shirt.avif">
                            <span>SHIRTS</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                <path d="M7 7h10v10"/>
                                <path d="M7 17 17 7"/>
                            </svg>
                        </a>
                        <a onclick="routerNavigate(event)" class="btn btn-outline" href="/shop.html?search=pants" data-img="/assets/image/pants.avif">
                            <span>LEGWEAR</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                <path d="M7 7h10v10"/>
                                <path d="M7 17 17 7"/>
                            </svg>
                        </a>
                        <a onclick="routerNavigate(event)" class="btn btn-outline" href="/shop.html?search=shoes" data-img="/assets/image/shoe.avif">
                            <span>FOOTWEAR</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                <path d="M7 7h10v10"/>
                                <path d="M7 17 17 7"/>
                            </svg>
                        </a>
                        <a onclick="routerNavigate(event)" class="btn btn-outline" href="/shop.html?search=glove" data-img="/assets/image/glove.avif">
                            <span>GLOVES</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                <path d="M7 7h10v10"/>
                                <path d="M7 17 17 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/sections/discover/discover.css"
    }

    onAnchorHover(event) {
        const target = event.target;
        if (target.tagName === "A" && target.dataset.img && this.image.src != target.dataset.img) {
            this.image.src = target.dataset.img
            this.image.loadImage()
        }
    }

    connectedCallback() {
        this.list = this.shadowRoot.getElementById("list")
        this.image = this.shadowRoot.getElementById("img")

        this.boundHover = this.onAnchorHover.bind(this)

        this.list.addEventListener("mouseover", this.boundHover)
    }
    
    disconnectedCallback() {
        this.list.removeEventListener("mouseover", this.boundHover)
    }
}

customElements.define("discover-collections", Discover)