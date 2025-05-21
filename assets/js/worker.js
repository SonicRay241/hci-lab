const CACHE_NAME = "web-components-cache";
const CACHE_EXPIRATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
const URLS_TO_CACHE = [
    "/components/navbar/navbar.js",
    "/components/navbar/navbar.js",
    "/components/main-content/main-content.js",
    "/components/carousel/carousel.js",
    "/components/carousel/carousel-card.js",
    "/components/accordion/accordion.js",
    "/components/accordion/accordion-child.js",
    "/components/lazy-img/lazy-img.js",
    "/assets/js/main.js",
    "/assets/js/utils.js",
    "/assets/css/main.css",
];

const pageAccessedByReload = (
    (window.performance.navigation && window.performance.navigation.type === 1) ||
    window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')
);

if (pageAccessedByReload) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const registration of registrations) {
            registration.unregister();
        }
    });
}

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(URLS_TO_CACHE).then(() => {
                cache.put("cache-timestamp", new Response(Date.now().toString()));
            });
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.open(CACHE_NAME).then(async (cache) => {
            const timestampResponse = await cache.match("cache-timestamp");
            const lastCacheTime = timestampResponse ? parseInt(await timestampResponse.text()) : 0;
            const now = Date.now();

            // If cache is older than 3 hours, delete it
            if (now - lastCacheTime > CACHE_EXPIRATION) {
                caches.delete(CACHE_NAME);
                return fetch(event.request);
            }

            return cache.match(event.request).then((response) => {
                return response || fetch(event.request);
            });
        })
    );
});
