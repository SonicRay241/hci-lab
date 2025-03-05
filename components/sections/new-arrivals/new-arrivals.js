class NewArrivals extends HTMLElement {
    constructor() {
        super()

        this.index = 0;

        const template = html`
            <link rel="stylesheet" href="../components/sections/new-arrivals/new-arrivals.css">
            <section class="new-arrivals">
                <div class="titlebar">
                    <h2 class="title-font title">NEW ARRIVALS</h2>
                    <div class="selector">
                        <button class="btn btn-outline icon-btn left-chevron" id="btn-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                        </button>
                        <button class="btn btn-outline icon-btn right-chevron" id="btn-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="slider-container">
                    <div class="slider" id="slider">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                        <img src="https://placehold.co/200x300/000000/FFFFFF/png">
                    </div>
                </div>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    handleNext() {
        const slider = this.shadowRoot.getElementById("slider")
        slider.style.setProperty("--slider-index", ++this.index)
    }

    handlePrev() {
        const slider = this.shadowRoot.getElementById("slider")
        slider.style.setProperty("--slider-index", --this.index)
    }

    connectedCallback() { // similar to componentDidMount()
        const nextBtn = this.shadowRoot.getElementById("btn-next")
        const prevBtn = this.shadowRoot.getElementById("btn-prev")

        nextBtn.addEventListener("click", this.handleNext.bind(this));
        prevBtn.addEventListener("click", this.handlePrev.bind(this));
    }

    disconnectedCallback() { // similar to componentWillUnmount()
        nextBtn.removeEventListener("click", this.handleNext.bind(this));
        prevBtn.removeEventListener("click", this.handlePrev.bind(this));
    }
}

customElements.define("new-arrivals", NewArrivals)