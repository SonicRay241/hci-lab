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
            if (this.value.trim() !== '') {
                // Fetch
                this.onchange(this.value)
            }
        }, 500)
    }

    getValue() {
        return this.value;
    }

    connectedCallback() {
        this.input = this.shadowRoot.getElementById("searchinput")

        this.input.addEventListener("keyup", this.onChange.bind(this))
        this.input.placeholder = this.dataset.placeholder
    }
}

customElements.define("search-bar", SearchBar)