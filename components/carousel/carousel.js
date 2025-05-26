class Carousel extends HTMLElement {
    constructor() {
        super()

        this.index = 0;
        this.wait = false;

        const template = html`
            <link rel="stylesheet" href="/components/carousel/carousel.css">
            <section class="carousel" id="carousel-parent">
                <div class="titlebar">
                    <h2 class="title-font title" id="title-wrapper">
                        <slot name="title">Carousel</slot>
                    </h2>
                    <div class="selector">
                        <button class="btn btn-outline icon-btn left-chevron" id="btn-prev" disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                        </button>
                        <button class="btn btn-outline icon-btn right-chevron" id="btn-next" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="slider-container">
                    <div class="slider" id="slider">
                        <slot name="content" id="slider-content">
                            <carousel-card>
                            </carousel-card>
                            <carousel-card>
                            </carousel-card>
                            <carousel-card>
                            </carousel-card>
                            <carousel-card>
                            </carousel-card>
                        </slot>
                    </div>
                </div>
            </section>
        `
        
        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/carousel/carousel.css"
    }

    static get deps() {
        return ["carousel-card"]
    }

    waitAnimation() {
        this.wait = true

        setTimeout(() => {
            this.wait = false
        }, 700)
    }

    updateButtonState() {
        this.prevBtn.disabled = this.index <= 0

        const displayAmount = window.getComputedStyle(this.slider).getPropertyValue("--items-per-screen")
        const totalAmount = this.sliderContent.assignedElements().length

        this.nextBtn.disabled = (displayAmount * (this.index + 1)) >= totalAmount
    }

    handleNext() {
        if (this.wait) return
        this.waitAnimation()
        
        this.slider.style.setProperty("--slider-index", ++this.index)
        this.updateButtonState()
    }

    handlePrev() {
        if (this.wait) return
        this.waitAnimation()
        
        this.slider.style.setProperty("--slider-index", --this.index)
        this.updateButtonState()
    }

    handleResize() {
        const displayAmount = window.getComputedStyle(this.slider).getPropertyValue("--items-per-screen")
        const totalAmount = this.sliderContent.assignedElements().length
        
        if ((displayAmount * (this.index)) >= totalAmount) {
            this.slider.style.setProperty("--slider-index", --this.index)
        }

        this.updateButtonState()
    }

    connectedCallback() { // similar to componentDidMount()
        this.slider = this.shadowRoot.getElementById("slider")
        this.sliderContent = this.shadowRoot.getElementById("slider-content")
        this.nextBtn = this.shadowRoot.getElementById("btn-next")
        this.prevBtn = this.shadowRoot.getElementById("btn-prev")

        this.boundNext = this.handleNext.bind(this)
        this.boundPrev = this.handlePrev.bind(this)
        this.boundResize = this.handleResize.bind(this)
        this.boundState = this.updateButtonState.bind(this)

        this.nextBtn.addEventListener("click", this.boundNext)
        this.prevBtn.addEventListener("click", this.boundPrev)
        window.addEventListener("resize", this.boundResize)
        window.addEventListener("load", this.boundState)
        window.addEventListener("spa:load", this.boundState)
    }
    
    disconnectedCallback() { // similar to componentWillUnmount()
        this.nextBtn.removeEventListener("click", this.boundNext)
        this.prevBtn.removeEventListener("click", this.boundPrev)
        window.removeEventListener("resize", this.boundResize)
    }
}

customElements.define("carousel-container", Carousel)