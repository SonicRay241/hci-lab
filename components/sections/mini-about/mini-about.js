class MiniAbout extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="../components/sections/mini-about/mini-about.css">
            <section class="about">
                i have severe brain damage
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }
}

customElements.define("mini-about", MiniAbout)