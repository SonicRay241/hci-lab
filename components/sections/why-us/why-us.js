class WhyUs extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/why-us/why-us.css">
            <section class="why-us">
                <h2 class="title-font title">
                    WHY CHOOSE US
                </h2>
                <p class="desc">
                    Our services are designed for exceptional quality with sustanability in mind. Our team is dedicated to exceeding your expectations and ensuring your expectations.
                </p>
                <accordion-parent>
                    <accordion-child>
                        <span slot="title">EXCEPTIONAL QUALITY</span>
                        <p slot="body" class="desc">
                            Our services are designed with the highest standard in mind, ensuring exceptional quality in every project. We prioritize excellence attention detail, guaranteeing outstanding results.
                        </p>
                    </accordion-child>
                    <accordion-child>
                        <span slot="title">OUR COMMITMENT FOR SUSTAINABILITY</span>
                        <p slot="body" class="desc">
                            We integrate eco-friendly practices into our production processes, ensuring that our creations are not only beautiful but also responsible. Whether it’s a bespoke evening gown or a statement leather accessory, each item represents a perfect balance between heritage and innovation. With a reputation for delivering unparalleled sophistication, we continue to define what it means to be a modern luxury fashion house.
                        </p>
                    </accordion-child>
                </accordion-parent>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }
}

customElements.define("why-us", WhyUs)