/**
 * @param {string} htmlStr
 */
function html(htmlStr) {
    const template = document.createElement("template")
    template.innerHTML = htmlStr

    return template
}

const defaultObserverOptions = {
    // rootMargin: "0px",
    threshold: 0.2
}