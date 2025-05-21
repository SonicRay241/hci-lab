class EventHero extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/event-hero/event-hero.css">
            <section class="event-hero">
                <img class="hero-bg" src="/assets/image/event.jpg" alt="Fashion Image">
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/sections/event-hero/event-hero.css"
    }

    connectedCallback() {
    }
}

customElements.define("event-hero", EventHero)