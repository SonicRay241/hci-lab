class CarouselCard extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/carousel/carousel-card.css">
            <div class="card">
                <div>
                    <slot name="img"></slot>
                </div>
                <div class="card-details">
                    <div>
                        <h3 class="title-font">
                            <slot name="title">
                                <div class="skeleton skeleton-title"></div>
                                <div class="skeleton skeleton-title2"></div>
                            </slot>
                        </h3>
                        <p>
                            <slot name="price"></slot>
                        </p>
                    </div>
                    <div class="btn-container">
                        <a class="btn" href="/">
                            <span>View</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
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

    connectedCallback() { // similar to componentDidMount()

    }

    disconnectedCallback() { // similar to componentWillUnmount()

    }
}

customElements.define("carousel-card", CarouselCard)