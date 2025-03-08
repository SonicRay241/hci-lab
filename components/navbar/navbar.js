class Navbar extends HTMLElement {
    constructor() {
        super()

        this.open = false

        const template = html`
            <link rel="stylesheet" href="../components/navbar/navbar.css">
            <nav id="nav-container" class="navbar">
                <div class="navbar-container">
                    <div class="link-container nav-left">
                        <a>COLLECTIONS</a>
                        <a>ABOUT</a>
                    </div>
                    <div>
                        <a href="/home.html" class="title-font">Christian Wijaya</a>
                    </div>
                    <div class="link-container nav-right">
                        <a>EVENT</a>
                        <a>CART</a>
                    </div>
                </div>
            </nav>
            <div class="navbar-space"></div>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    updateNavbar() {
        if (this.open) {
            const navbar = this.shadowRoot.getElementById("navbar")
            // TODO: Mobile Menu

            return
        }
    }

    handleResize = () => {
        if (window.innerWidth > 768) {
            this.open = false
        }
    };

    connectedCallback() { // similar to componentDidMount()
        // window.addEventListener("scroll", this.handleScroll);
    }

    disconnectedCallback() { // similar to componentWillUnmount()
        // window.removeEventListener("scroll", this.handleScroll);
    }
}

customElements.define("navbar-template", Navbar)