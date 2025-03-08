class AccordionChild extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="../components/accordion-child/accordion-child.css">
            <div>
                
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

customElements.define("accordion-child", AccordionChild)