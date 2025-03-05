/**
 * @param {string} htmlStr
 */
function html(htmlStr) {
    const template = document.createElement("template")
    template.innerHTML = htmlStr
    
    return template
}