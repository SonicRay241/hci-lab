class NewArrivals extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="../components/sections/new-arrivals/new-arrivals.css">
            <section class="new-arrivals">
                <div class="titlebar">
                    <h2 class="title-font title">NEW ARRIVALS</h2>
                    <div class="selector">
                        <button class="btn btn-outline icon-btn left-chevron">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                        </button>
                        <button class="btn btn-outline icon-btn right-chevron">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    connectedCallback() { // similar to componentDidMount()
        // window.addEventListener("scroll", this.handleScroll);
    }

    disconnectedCallback() { // similar to componentWillUnmount()
        // window.removeEventListener("scroll", this.handleScroll);
    }
}

customElements.define("new-arrivals", NewArrivals)