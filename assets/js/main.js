function closeLoadingOverlay() {
    const loadingOverlay = document.getElementById("loading-overlay")
    loadingOverlay.classList.add("overlay-close")
}

document.addEventListener("DOMContentLoaded", () => {
    const loadingOverlay = document.getElementById("loading-overlay")
    const spinner = document.createElement("div")
    loadingOverlay.appendChild(spinner)
})

window.addEventListener("load", () => {
    const loader = document.getElementById("loader")
    loader.style.display = "none"

    window.addEventListener("spa:loading", () => {
        loader.style.display = "block"
    })
    window.addEventListener("spa:load", () => {
        loader.style.display = "none"
    })
})

window.addEventListener("load", closeLoadingOverlay)