class Footer extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/footer/footer.css">
            <footer class="footer-wrapper">
                <main-content>
                    <div class="footer-body">
                        <div class="footer-urls">
                            <a href="#">
                                <span>COLLECTION</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                    <path d="M7 7h10v10"/>
                                    <path d="M7 17 17 7"/>
                                </svg>
                            </a>
                            <a href="#">
                                <span>STORY</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                    <path d="M7 7h10v10"/>
                                    <path d="M7 17 17 7"/>
                                </svg>
                            </a>
                            <a href="#">
                                <span>HIGHLIGHTS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                    <path d="M7 7h10v10"/>
                                    <path d="M7 17 17 7"/>
                                </svg>
                            </a>
                            <a href="#">
                                <span>SHOP</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                    <path d="M7 7h10v10"/>
                                    <path d="M7 17 17 7"/>
                                </svg>
                            </a>
                            <a href="#">
                                <span>SUSTAINABILITY</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                    <path d="M7 7h10v10"/>
                                    <path d="M7 17 17 7"/>
                                </svg>
                            </a>
                            <a href="#">
                                <span>READY TO WEAR</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                    <path d="M7 7h10v10"/>
                                    <path d="M7 17 17 7"/>
                                </svg>
                            </a>
                            <a href="#">
                                <span>CONTACT US</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                    <path d="M7 7h10v10"/>
                                    <path d="M7 17 17 7"/>
                                </svg>
                            </a>
                            <a href="#">
                                <span>ABOUT US</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                    <path d="M7 7h10v10"/>
                                    <path d="M7 17 17 7"/>
                                </svg>
                            </a>
                            <a href="#">
                                <span>ACCESSORIES</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                    <path d="M7 7h10v10"/>
                                    <path d="M7 17 17 7"/>
                                </svg>
                            </a>
                        </div>
                        <div class="footer-contacts">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                    <rect width="4" height="12" x="2" y="9"/>
                                    <circle cx="4" cy="4" r="2"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="footer-policies">
                        <a href="#">
                            <span>
                                SHIPPINGS
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                <path d="M7 7h10v10"/>
                                <path d="M7 17 17 7"/>
                            </svg>
                        </a>
                        <a href="#">
                            <span>
                                RETURNS
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                <path d="M7 7h10v10"/>
                                <path d="M7 17 17 7"/>
                            </svg>
                        </a>
                        <a href="#">
                            <span>
                                TERMS OF SERVICE
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                <path d="M7 7h10v10"/>
                                <path d="M7 17 17 7"/>
                            </svg>
                        </a>
                        <a href="#">
                            <span>
                                PRIVACY POLICY
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                                <path d="M7 7h10v10"/>
                                <path d="M7 17 17 7"/>
                            </svg>
                        </a>
                    </div>
                </main-content>
                <div class="footer-logo">
                    
                </div>
            </footer>
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

customElements.define("footer-template", Footer)