class Navbar extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="../components/navbar/navbar.css">
            <nav id="nav-container" class="navbar">
                <div class="navbar-container">
                    <div class="link-container nav-left">
                        <a>COLLECTIONS</a>
                        <a>ABOUT</a>
                    </div>
                    <a href="/pages/home.html" class="title-font">Christian Wijaya</a>
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

    // handleScroll = () => {
    //     const navElement = this.shadowRoot.getElementById("nav-container")
    //     if (window.scrollY === 0) {
    //         navElement.classList.remove("shadow"); // Example: Add a class when at top
    //     } else {
    //         navElement.classList.add("shadow");
    //     }
    // };

    connectedCallback() { // similar to componentDidMount()
        // window.addEventListener("scroll", this.handleScroll);
    }

    disconnectedCallback() { // similar to componentWillUnmount()
        // window.removeEventListener("scroll", this.handleScroll);
    }
}

customElements.define("navbar-template", Navbar)