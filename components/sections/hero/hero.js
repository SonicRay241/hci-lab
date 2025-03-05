class Hero extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="../components/sections/hero/hero.css">
            <div class="hero">
                <div class="hero-left">
                    <!-- <img src="../assets/image/hamilton-gala.jpg" alt="Lewis Hamilton" class="hero-img"> -->
                    <div class="hero-img"></div>
                    <h1 class="title-font hero-title">TIMELESS</h1>
                    <h1 class="title-font hero-title hero-title-end">ELEGANCE</h1>
                    <!-- <div class="hero-img hero-img-1"></div> -->
                </div>
                <div class="hero-right">
                    <div class="hero-img"></div>
                    <p>Blending classic craftmanship with a twist of contemporary innovation, where each piece reflects meticulous attention to detail. For those who seek fashion that makes a bold yet elegant statement.</p>
                </div>
            </div>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }
}

customElements.define("hero-section", Hero)