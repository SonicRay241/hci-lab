const template = document.createElement("template")
template.innerHTML = `
    <style src="./navbar.css"></style>
    <nav class="nav shadow">
        <p>Christian Wijaya</p>
    </nav>
`

class Navbar extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append()
    }
}