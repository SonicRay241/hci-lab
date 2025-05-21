class Countdown extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/countdown/countdown.css">
            <section class="about">
                <p id="e">aaaaa</p>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/sections/countdown/countdown.css"
    }

    connectedCallback() {
    }
}

customElements.define("countdown-section", Countdown)