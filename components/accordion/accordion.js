class Accordion extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="../components/accordion/accordion.css">
            <div class="parent" id="parent">
                <p id="debug"></p>
                <slot>
                    <accordion-child>
                    </accordion-child>
                </slot>
            </div>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    onDataOpenIndexChange() {
        const slot = this.accordionParent.childNodes[3]
        /**
         * @type {AccordionChild[]}
         */
        const selectedElement = slot.assignedElements()
        
        selectedElement.forEach((el, idx) => {
            el.updateState(idx.toString() == this.accordionParent.dataset.openIndex)
        })
    }

    connectedCallback() { // similar to componentDidMount()
        // Initialize default
        this.accordionParent = this.shadowRoot.getElementById("parent")
        this.accordionParent.dataset.openIndex = "none"

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "data-open-index") {
                    this.onDataOpenIndexChange();
                }
            });
        });

        observer.observe(this.accordionParent, { attributes: true });
    }

    disconnectedCallback() { // similar to componentWillUnmount()

    }
}

customElements.define("accordion-parent", Accordion)