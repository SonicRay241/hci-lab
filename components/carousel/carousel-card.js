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
                        <slot name="title">
                            <div class="skeleton skeleton-title"></div>
                            <div class="skeleton skeleton-title2"></div>
                        </slot>
                    </h3>
                    <p>
                        <slot name="price"></slot>
                    </p>
                </div>
                <a href="/">
                    <div>
                        <span>View</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        </svg>
                    </div>
                </a>
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