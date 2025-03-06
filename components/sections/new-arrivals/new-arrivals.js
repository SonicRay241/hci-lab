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
            </carousel-container>
        `

        console.log(template.content);
        
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
        // const nextBtn = this.shadowRoot.getElementById("btn-next")
        // const prevBtn = this.shadowRoot.getElementById("btn-prev")

        // nextBtn.addEventListener("click", this.handleNext.bind(this));
        // prevBtn.addEventListener("click", this.handlePrev.bind(this));

        // window.addEventListener("load", () => {
        //     const slider = this.shadowRoot.getElementById("slider")
        //     slider.innerHTML = this.images
        // })
    }

    disconnectedCallback() { // similar to componentWillUnmount()
        // nextBtn.removeEventListener("click", this.handleNext.bind(this));
        // prevBtn.removeEventListener("click", this.handlePrev.bind(this));
    }
}

customElements.define("new-arrivals", NewArrivals)