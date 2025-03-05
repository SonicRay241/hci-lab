class Hero extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="../components/sections/hero/hero.css">
            <section class="hero">
                <div class="hero-left">
                    <h1 class="title-font hero-title hide" id="title1">HERITAGE</h1>
                    <h1 class="title-font hero-title hero-title-end hide" id="title2">REIMAGINED</h1>
                </div>
                <div class="hero-right">
                    <div class="hero-img" id="img"></div>
                    <div class="desc-container">
                        <p class="desc" id="desc">We honor the artistry of the past while embracing the innovation of the future. Each piece is crafted with meticulous attention to detail, where tradition and modernity come together in perfect harmony.</p>
                    </div>
                </div>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    animate() {
        const title1 = this.shadowRoot.getElementById("title1")
        const title2 = this.shadowRoot.getElementById("title2")

        const desc = this.shadowRoot.getElementById("desc")
        const img = this.shadowRoot.getElementById("img")

        setTimeout(() => {
            title1.classList.add("fade-in")
            
        }, 200)

        setTimeout(() => {
            title2.classList.add("fade-in")
            img.classList.add("fade-in")
        }, 400)

        setTimeout(() => {
            desc.classList.add("fade-in")
        }, 800)
    }

    connectedCallback() {
        window.addEventListener("load", this.animate.bind(this));

    }

    disconnectedCallback() { // similar to componentWillUnmount()
        // window.removeEventListener("load", this.animate);
    }
}

customElements.define("hero-section", Hero)