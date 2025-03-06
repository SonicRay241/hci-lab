class CarouselCard extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="../components/carousel/carousel-card.css">
            <div class="card">
                <div>
                    <!-- image here -->
                    <slot name="img"></slot>
                </div>
                <div class="card-details title-font">
                    <h3>
                        <slot name="title">Card</slot>
                    </h3>
                    <p>
                        <slot name="price">$99</slot>
                    </p>
                </div>
            </div>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    connectedCallback() { // similar to componentDidMount()

    }

    disconnectedCallback() { // similar to componentWillUnmount()

    }
}

customElements.define("carousel-card", CarouselCard)