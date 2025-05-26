class AboutTemplate extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/about-template/about-template.css">
            <section class="about-container">
                <div class="about-grid">
                    <div class="text" id="container">
                        <h1 class="title-font title">Our Story</h1>
                        <p class="paragraph">At Christian Wijaya, we believe that true luxury lies in the harmony of timeless elegance and modern sophistication. Founded with a vision to redefine contemporary fashion, our brand is a celebration of refined aesthetics, exquisite craftsmanship, and forward-thinking design.</p>
                        <p class="paragraph">From high-end apparel to accessories and footwear, every piece bearing the Christian Wijaya name is a testament to our commitment to quality and artistry. We blend classic silhouettes with innovative details, using only the finest materials sourced responsibly from around the world. Our meticulous attention to detail ensures that each creation not only looks exceptional but feels truly special.</p>
                        <p class="paragraph">Worn by celebrities, trendsetters, and discerning style enthusiasts alike, Christian Wijaya is more than just fashion—it is a statement of identity and intention. We are proud to create designs that are bold yet graceful, expressive yet timeless. But our mission goes beyond beauty. As a modern luxury fashion house, we are deeply committed to sustainability. From eco-conscious sourcing to responsible production practices, we strive to ensure that our legacy is as thoughtful as it is stylish.</p>
                        <p class="paragraph">Whether it's a bespoke evening gown or a signature leather accessory, Christian Wijaya invites you to experience fashion where heritage meets innovation—crafted to inspire, empower, and endure.</p>
                        <a onclick="routerNavigate(event)" href="/shop.html" class="btn shop-now">
                            <span>Shop Now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-foreground)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right">
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                    <div class="img">
                        <lazy-img src="/assets/image/model-image.jpg" alt="Fashion Image" id="img"></lazy-img>
                    </div>
                </div>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/sections/about-template/about-template.css"
    }

    onResize() {
        const height = this.container.scrollHeight
        const imgHeight = this.img.scrollHeight

        if (imgHeight + height <= 0) return

        if (window.innerWidth < 896) {
            this.parent.style.height = `${(imgHeight + height)*1.5}px`
            return
        }
        this.parent.style.height = height + "px"
    }

    connectedCallback() {
        this.container = this.shadowRoot.getElementById("container")
        this.img = this.shadowRoot.getElementById("img")
        this.parent = this.parentElement

        this.boundResize = this.onResize.bind(this)

        window.addEventListener("load", this.boundResize)
        window.addEventListener("spa:load", this.boundResize)
        window.addEventListener("resize", this.boundResize)
    }

    disconnectedCallback() {
        this.parent.style.height = "auto"
        window.removeEventListener("resize", this.boundResize)
    }
}

customElements.define("about-template", AboutTemplate)