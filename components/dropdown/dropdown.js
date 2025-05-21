class Dropdown extends HTMLElement {
    constructor() {
        super()

        this.open = false
        this.wait = false

        const template = html`
            <link rel="stylesheet" href="/components/dropdown/dropdown.css">
            <div class="dropdown-wrapper" id="dropdown-wrapper">
                <div class="dropdown-parent" id="dropdown-trigger">
                    <h3><slot name="title"><span>Dropdown</span></slot></h3>
                    <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted-foreground)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right">
                        <path d="m9 18 6-6-6-6"/>
                    </svg>
                </div>
                <div class="dropdown-children">
                    <slot name="body">
                        <p>Dropdown children</p>
                    </slot>
                </div>
            </div>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/dropdown/dropdown.css"
    }

    waitAnimation() {
        this.wait = true
        setTimeout(() => {
            this.wait = false
        }, 350)
    }

    
    handleToggle() {
        if (this.wait) return
        this.waitAnimation()

        if (this.open) {
            this.wrapper.classList.remove("open")
            this.open = false

            return
        }
        
        
        this.wrapper.classList.add("open")
        this.open = true
    }

    connectedCallback() {
        this.trigger = this.shadowRoot.getElementById("dropdown-trigger")
        this.wrapper = this.shadowRoot.getElementById("dropdown-wrapper")

        this.trigger.addEventListener("click", this.handleToggle.bind(this))
    }

    disconnectedCallback() {
        this.trigger.removeEventListener("click", this.handleToggle.bind(this))
    }
}

customElements.define("drop-down", Dropdown)