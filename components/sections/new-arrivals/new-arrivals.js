class NewArrivals extends HTMLElement {
    constructor() {
        super()

        this.index = 0;
        this.wait = false;
        this.amount = 14

        this.images = Array.apply(null, Array(this.amount)).map(() => {
            return `
                <img src="/assets/image/ver2.jpeg">
            `
        }).join("")

        const template = html`
            <link rel="stylesheet" href="/components/sections/new-arrivals/new-arrivals.css">
            <carousel-container>
                <span slot="title">
                    NEW ARRIVALS
                </span>
                <carousel-card slot="content" class="slider-children">
                    <lazy-img slot="img" src="/assets/image/ver2.jpeg"></lazy-img>
                    <span slot="title">
                        DRESSY CASUAL SUIT
                    </span>
                    <span slot="price">
                        <p>
                            $699
                        </p>
                    </span>
                </carousel-card>
                <carousel-card slot="content" class="slider-children">
                </carousel-card>
                <carousel-card slot="content" class="slider-children">
                </carousel-card>
                <carousel-card slot="content" class="slider-children">
                </carousel-card>
                <carousel-card slot="content" class="slider-children">
                </carousel-card>
                <carousel-card slot="content" class="slider-children">
                </carousel-card>
                <carousel-card slot="content" class="slider-children">
                </carousel-card>
            </carousel-container>
            <div class="view-link-container">
                <a href="/shop.html?filter=latest" class="btn btn-ghost">
                    <span>
                        See more
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                        <path d="M7 7h10v10"/>
                        <path d="M7 17 17 7"/>
                    </svg>
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

customElements.define("new-arrivals", NewArrivals)