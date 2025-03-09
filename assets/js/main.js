function closeLoadingOverlay() {
    const loadingOverlay = document.getElementById("loading-overlay")

    loadingOverlay.classList.add("overlay-close")
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/assets/js/worker.js')
        .then(() => console.log('Service Worker registered!'))
        .catch(err => console.error('Service Worker failed:', err));
}

window.addEventListener("load", closeLoadingOverlay)