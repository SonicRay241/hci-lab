class NewArrivals extends HTMLElement {
    constructor() {
        super()

        this.index = 0;
        this.wait = false;
        this.amount = 14

        this.images = Array.apply(null, Array(this.amount)).map(() => {
            return `
                <img src="../assets/image/ver2.jpeg">
            `
        }).join("")

        const template = html`
            <link rel="stylesheet" href="../components/sections/new-arrivals/new-arrivals.css">
            <carousel-container>
                <span slot="title">NEW ARRIVALS</span>
                <carousel-card slot="content" class="slider-children">
                    <lazy-img slot="img" src="/assets/image/ver2.jpeg"></lazy-img>
                    <span slot="title">
                        CASUAL BLACK SUIT
                    </span>
                    <span slot="price">
                        <p>
                            $69
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
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    waitAnimation() {
        this.wait = true

        setTimeout(() => {
            this.wait = false
        }, 700)
    }

    handleNext() {
        if (this.wait) return
        this.waitAnimation()

        const slider = this.shadowRoot.getElementById("slider")
        slider.style.setProperty("--slider-index", ++this.index)

        const prevBtn = this.shadowRoot.getElementById("btn-prev")
        prevBtn.disabled = this.index <= 0
    }

    handlePrev() {
        if (this.wait) return
        this.waitAnimation()

        const slider = this.shadowRoot.getElementById("slider")
        slider.style.setProperty("--slider-index", --this.index)

        const prevBtn = this.shadowRoot.getElementById("btn-prev")
        prevBtn.disabled = this.index <= 0
    }

    connectedCallback() { // similar to componentDidMount()
    }

    disconnectedCallback() { // similar to componentWillUnmount()
    }
}

customElements.define("new-arrivals", NewArrivals)