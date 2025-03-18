class AccordionChild extends HTMLElement {
    constructor() {
        super()

        this.open = false

        const template = html`
            <link rel="stylesheet" href="/components/accordion/accordion-child.css">
            <div class="child">
                <button class="accordion-title btn btn-ghost" id="accordion-toggle">
                    <h3 class="title-font title">
                        <slot name="title">Accordion</slot>
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right" id="icon">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                    </svg>
                </button>
                <div class="accordion-body" id="accordion-body">
                    <slot name="body" id="body">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat numquam sed quaerat amet nulla! Itaque repudiandae cumque delectus sequi? Iste laboriosam culpa nostrum odit at magnam explicabo incidunt nisi odio?
                        </p>
                    </slot>
                </div>
            </div>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }
    /**
     * @param {boolean} open
     */
    updateState(open) {
        const body = this.shadowRoot.getElementById("accordion-body")
        const icon = this.shadowRoot.getElementById("icon")

        if (open) {
            body.style.transitionTimingFunction = "var(--ease-in-circ)"
            body.style.maxHeight = "1000px"
            icon.style.transform = "rotate(45deg)"

            return
        }
        body.style.transitionTimingFunction = "var(--ease-out-circ)"
        body.style.maxHeight = "0"
        icon.style.transform = "rotate(0deg)"
    }

    handleToggle() {
        /**
         * @type {HTMLElement}
         */
        const wrapper = this.parentNode
        const parent = wrapper.shadowRoot.getElementById("parent")
        const slot = parent.childNodes[3]
        
        /**
         * @type {HTMLElement[]}
         */
        const childNodes = Array.prototype.slice.call(slot.assignedElements())
        const elementIdx = childNodes.indexOf(this)

        if (parent.dataset.openIndex == elementIdx) {
            parent.dataset.openIndex = "none"
            return
        }
        
        parent.dataset.openIndex = elementIdx.toString()
    }

    connectedCallback() { // similar to componentDidMount()
        this.toggler = this.shadowRoot.getElementById("accordion-toggle")
        this.toggler.addEventListener("click", this.handleToggle.bind(this))

        /**
         * @type {HTMLSlotElement}
         */
        const body = this.shadowRoot.getElementById("body")
        body.assignedElements().forEach((el) => {
            el.style.paddingTop = "0.5rem"
            el.style.paddingBottom = "1.5rem"
        });
    }

    disconnectedCallback() { // similar to componentWillUnmount()
        this.toggler.removeEventListener("click", this.handleToggle.bind(this))
    }
}

customElements.define("accordion-child", AccordionChild)