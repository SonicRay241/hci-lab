class SearchBar extends HTMLElement {
    constructor() {
        super()

        /**
         * @type {string}
         */
        this.value = ""

        const template = html`
            <link rel="stylesheet" href="/components/searchbar/searchbar.css">
            <section class="searchbar">
                <input id="searchinput" class="bar" type="text" placeholder="Search...">
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/searchbar/searchbar.css"
    }

    /**
     * 
     * @param {Event} event 
     */
    onChange(event) {
        this.value = event.target.value
        
        clearTimeout(this.debounceTimeout)

        this.debounceTimeout = setTimeout(() => {
            this.onchange(this.value)
        }, 500)
    }

    change(value = "") {
        this.input.value = value
    }

    getValue() {
        return this.value;
    }

    connectedCallback() {
        this.input = this.shadowRoot.getElementById("searchinput")

        this.boundChange = this.onChange.bind(this)

        this.input.addEventListener("keyup", this.boundChange)
        this.input.placeholder = this.dataset.placeholder
    }

    disconnectedCallback() {
        this.input.removeEventListener("keyup", this.boundChange)
    }
}

customElements.define("search-bar", SearchBar)