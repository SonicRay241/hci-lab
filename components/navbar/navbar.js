class Navbar extends HTMLElement {
    constructor() {
        super()

        this.open = false
        this.wait = false

        const template = html`
            <link rel="stylesheet" href="/components/navbar/navbar.css">
            <div class="mobile-menu" id="mobile-nav">
                <!-- <div class="mobile-content" id="mobile-content">
                    <button class="btn btn-ghost icon-btn hamburger" id="menu-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
                            <path d="M18 6 6 18"/>
                            <path d="m6 6 12 12"/>
                        </svg>
                    </button>
                </div> -->
            </div>
            <nav class="navbar" id="nav-container">
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
                    <button class="btn btn-ghost icon-btn hamburger" id="menu-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
                            <line x1="4" x2="20" y1="6" y2="6" class="hamburger-top"/>
                            <line x1="4" x2="20" y1="12" y2="12" class="hamburger-middle"/>
                            <line x1="4" x2="20" y1="18" y2="18" class="hamburger-bottom"/>
                        </svg>
                    </button>
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
            this.mobileMenu.style.transform = "scaleY(1)"
            this.toggleMenuButton.classList.add("active")
            return
        }
        this.mobileMenu.style.transform = "scaleY(0)"
        this.toggleMenuButton.classList.remove("active")
    }

    waitAnimation() {
        this.wait = true
        setTimeout(() => {
            this.wait = false
        }, 500)
    }

    handleResize() {
        if (window.innerWidth > 704) {
            this.open = false
        }

        this.updateNavbar()
    };

    handleToggle() {
        if (this.wait) {
            return
        }
        this.waitAnimation()
        this.open = !this.open
        this.updateNavbar()
    }

    connectedCallback() { // similar to componentDidMount()
        this.mobileMenu = this.shadowRoot.getElementById("mobile-nav")
        this.toggleMenuButton = this.shadowRoot.getElementById("menu-toggle")
        this.container = this.shadowRoot.getElementById("nav-container")

        setTimeout(() => {
            this.mobileMenu.style.transition = "transform 500ms var(--ease-out-circ)"
        }, 50)

        window.addEventListener("resize", this.handleResize.bind(this));
        this.toggleMenuButton.addEventListener("click", this.handleToggle.bind(this))
    }
    
    disconnectedCallback() { // similar to componentWillUnmount()
        window.removeEventListener("resize", this.handleResize.bind(this));
        this.toggleMenuButton.removeEventListener("click", this.handleToggle.bind(this))
    }
}

customElements.define("navbar-template", Navbar)