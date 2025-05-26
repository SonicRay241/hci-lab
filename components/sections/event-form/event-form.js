class EventForm extends HTMLElement {
    constructor() {
        super()

        const template = html`
            <link rel="stylesheet" href="/components/sections/event-form/event-form.css">
            <section class="event-form">
                <h2 class="title-font header">REGISTER</h2>
                <form id="event-form">
                    <label for="name">Full Name</label>
                    <input class="form-input" name="name" id="name" type="text" placeholder="Alex Albon">
                    <p class="form-error hidden" id="error-name">Invalid name, name must have at least 2 letters!</p>
                    <label for="email">Email</label>
                    <input class="form-input" name="email" id="email" type="text" placeholder="alex@example.com">
                    <p class="form-error hidden" id="error-email">Email is not formatted correctly!</p>
                    <label for="phone">Phone</label>
                    <input class="form-input" name="phone" id="phone" type="text" placeholder="+62 812-3456-7890">
                    <p class="form-error hidden" id="error-phone">Phone number is not formatted correctly!</p>
                    <label for="birth">Date of Birth</label>
                    <input class="form-input" name="birth" id="birth" type="text" placeholder="MM/DD/YYYY">
                    <p class="form-error hidden" id="error-birth">Date of birth is not formatted correctly!</p>
                    <label for="gender">Gender</label>
                    <select name="gender" class="form-input" id="gender">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <button class="btn">Submit</button>
                </form>
            </section>
        `

        // Shadow DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
    }

    static get cssPath() {
        return "/components/sections/event-form/event-form.css"
    }

    validateName(name) {
        if (name.length < 1) return false

        return name
            .trim()
            .split(" ") // split by spaces
            .every(word => word.length >= 2);
    }

    validateEmail(email) {
        // Check for one @ symbol
        const parts = email.split('@');
        if (parts.length !== 2) return false;

        const [local, domain] = parts;

        // Local and domain parts must not be empty
        if (!local || !domain) return false;

        // Domain must contain at least one dot (.)
        if (!domain.includes('.')) return false;

        // Dot can't be at the start or end of the domain
        if (domain.startsWith('.') || domain.endsWith('.')) return false;

        // No consecutive dots in domain
        if (domain.includes('..')) return false;

        // Local part should not start or end with dot
        if (local.startsWith('.') || local.endsWith('.')) return false;

        // No consecutive dots in local part
        if (local.includes('..')) return false;

        // Only basic ASCII characters allowed (optional, loose check)
        for (let char of email) {
            const code = char.charCodeAt(0);
            if (code <= 32 || code >= 127) return false; // control or non-ASCII
        }

        return true;
    }

    validatePhone(phone) {
        // Must start with '+'
        if (!phone.startsWith('+')) return false;

        // Remove the '+' for validation
        let digitsOnly = '';
        for (let i = 1; i < phone.length; i++) {
            const char = phone[i];
            if (char >= '0' && char <= '9') {
                digitsOnly += char;
            } else if (char === ' ' || char === '-') {
                continue; // allow spaces and dashes
            } else {
                return false; // invalid character
            }
        }

        // Check length (E.164 allows up to 15 digits)
        if (digitsOnly.length < 8 || digitsOnly.length > 15) {
            return false;
        }

        // All characters are valid and length is good
        return true;
    }

    validateDate(dateStr) {
        const parts = dateStr.split('/');
        if (parts.length !== 3) return false;

        const [mmStr, ddStr, yyyyStr] = parts;

        // All parts must be numeric and have correct length
        if (
            mmStr.length !== 2 ||
            ddStr.length !== 2 ||
            yyyyStr.length !== 4 ||
            isNaN(mmStr) ||
            isNaN(ddStr) ||
            isNaN(yyyyStr)
        ) {
            return false;
        }

        function isLeapYear(year) {
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        }

        const month = parseInt(mmStr, 10);
        const day = parseInt(ddStr, 10);
        const year = parseInt(yyyyStr, 10);

        // Validate month range
        if (month < 1 || month > 12) return false;

        // Days in each month
        const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30,
            31, 31, 30, 31, 30, 31];

        // Validate day range
        if (day < 1 || day > daysInMonth[month - 1]) return false;

        return true;
    }

    onSubmit(event) {
        event.preventDefault()

        const name = this.form.elements["name"].value
        const email = this.form.elements["email"].value
        const phone = this.form.elements["phone"].value
        const birth = this.form.elements["birth"].value
        const gender = this.form.elements["gender"].value

        const nameValid = this.validateName(name)
        const emailValid = this.validateEmail(email)
        const phoneValid = this.validatePhone(phone)
        const birthValid = this.validateDate(birth)

        if (!nameValid) this.shadowRoot.getElementById("error-name").classList.remove("hidden")
        if (!emailValid) this.shadowRoot.getElementById("error-email").classList.remove("hidden")
        if (!phoneValid) this.shadowRoot.getElementById("error-phone").classList.remove("hidden")
        if (!birthValid) this.shadowRoot.getElementById("error-birth").classList.remove("hidden")

        if (!emailValid || !phoneValid || !birthValid) return

        console.log(name, email, phone, birth, gender); // Imagine POST request
        this.form.reset()
        this.shadowRoot.querySelectorAll(".form-error").forEach((el) => {
            el.classList.add("hidden")
        })

    }

    connectedCallback() {
        this.form = this.shadowRoot.getElementById("event-form")
        this.boundSubmit = this.onSubmit.bind(this)

        this.form.addEventListener("submit", this.boundSubmit)
    }

    disconnectedCallback() {
        this.form.removeEventListener("submit", this.boundSubmit)
    }
}

customElements.define("event-form", EventForm)