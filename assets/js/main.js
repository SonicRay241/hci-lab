function closeLoadingOverlay() {
    const loadingOverlay = document.getElementById("loading-overlay")

    loadingOverlay.classList.add("overlay-close")
}

window.addEventListener("load", closeLoadingOverlay)