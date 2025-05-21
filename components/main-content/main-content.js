class MainContent extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/main-content/main-content.css">
            <main class="center-content">
                <div class="content" id="wrapper">
                    <slot></slot>
                </div>
            </main>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }
}

customElements.define("main-content", MainContent)