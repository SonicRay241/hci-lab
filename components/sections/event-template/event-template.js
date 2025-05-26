class EventTemplate extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/event-template/event-template.css">
            <section class="event-template">
                <img class="hero-bg" src="/assets/image/model.jpg" alt="Fashion Image">
                <div class="texts">
                    <h1 class="title-font title">TIMELESS ELEGANCE</h1>
                    <p class="info">July 18, 2025 - July 20, 2025</p>
                    <p class="info">Grand Ballroom, City Center</p>
                    <p class="paragraph">
                        We are seeking confident, expressive, and passionate models to walk the runway for Timeless Elegance — a luxury fashion show where classic styles meet modern innovation. This exclusive event will highlight sophisticated silhouettes, elegant craftsmanship, and bold reinterpretations of timeless fashion, all created through a fully sustainable and eco friendly production process. As a model, you will represent not only high fashion but also a powerful commitment to conscious design.
                        <br><br>
                        We welcome both new and experienced models who embody grace, professionalism, and a deep appreciation for style with purpose. If you have a strong presence, love fashion that tells a story, and want to be part of a show that celebrates both heritage and progress — we want to see you.
                        <br><br>
                        <strong>Step forward. Own the runway. Inspire the future.</strong>
                        <br>
                        Apply now and be the face of Timeless Elegance.
                    </p>
                </div>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/sections/event-template/event-template.css"
    }

    connectedCallback() {
    }
}

customElements.define("event-template", EventTemplate)