const pageCache = {}

/**
 * 
 * @param {MouseEvent} event 
 */
async function routerNavigate(event) {
    event.preventDefault()

    const url = event.target.href
    const layoutTarget = event.target.dataset.layout || "content"

    const navbar = document.getElementById("navbar")
    if (navbar.open) {
        navbar.handleToggle()
    }

    if (window.location.href == url) return

    history.pushState({}, "", url)

    document.getElementById(layoutTarget).innerHTML = null

    const cachedPage = pageCache[url]

    if (cachedPage) {
        const layout = document.getElementById(layoutTarget)
        layout.innerHTML = cachedPage
        window.dispatchEvent(new Event("spa:load"));

        return
    }

    window.dispatchEvent(new Event("spa:loading"));

    const response = await fetch(url);
    const text = await response.text();
    const doc = new DOMParser().parseFromString(text, 'text/html');

    // Load and execute scripts from head
    const headScripts = doc.head.querySelectorAll('script');
    const scriptPromises = Array.from(headScripts).map(script => {
        return new Promise((resolve) => {
            if (script.src) {
                const url = new URL(script.src)

                // Skip if already loaded
                if (document.querySelector(`script[src="${url.pathname}"]`)) return resolve();

                const newScript = document.createElement('script');
                newScript.src = url.pathname;
                newScript.type = script.type || 'text/javascript';
                newScript.defer = script.defer || false;

                newScript.onload = resolve;
                newScript.onerror = resolve; // still resolve on error to avoid hanging
                document.head.appendChild(newScript);
            } else {
                // Inline scripts run immediately
                const inlineScript = document.createElement('script');
                inlineScript.textContent = script.textContent;
                document.head.appendChild(inlineScript);
                resolve();
            }
        });
    });

    Promise.all(scriptPromises).then(() => {
        const usedTags = new Set();
        const cssPaths = new Set();

        doc.querySelectorAll('*').forEach(el => {
            if (el.tagName.includes('-')) {
                usedTags.add(el.tagName.toLowerCase());
            }
        });

        Array.from(usedTags).forEach(tag => {
            const paths = collectCssPaths(tag);
            paths.forEach(href => cssPaths.add(href));
        });

        const cssPromises = Array.from(cssPaths).map(href => {
            return new Promise(resolve => {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = href;
                link.onload = resolve;
                link.onerror = resolve;
                if (!document.querySelector(`link[rel="stylesheet"][href="${href}"]`)) {
                    document.head.appendChild(link);
                }
            });
        });

        Promise.all(cssPromises).then(() => {
            // Replace content body
            const layout = document.getElementById(layoutTarget)
            // layout.style.opacity = "0"
            layout.innerHTML = doc.getElementById(layoutTarget).innerHTML
            pageCache[url] = doc.getElementById(layoutTarget).innerHTML
            window.dispatchEvent(new Event("spa:load"));
        })
    })
}

window.addEventListener("load", () => {
    pageCache[window.location.href] = document.getElementById("content").innerHTML
})

function collectCssPaths(tag, seen = new Set()) {
    const paths = [];
    if (seen.has(tag)) return paths;
    seen.add(tag);

    const ctor = customElements.get(tag);

    if (!ctor) return paths;

    if (ctor.cssPath) {
        paths.push(ctor.cssPath);
    }


    // Handle direct href dependencies
    // if (Array.isArray(ctor.styleDependencies)) {
    //     for (const dep of ctor.styleDependencies) {
    //         if (!seen.has(dep)) {
    //             paths.push(dep); // dep is just an href string
    //         }
    //     }
    // }

    // Handle nested components by tag name
    if (Array.isArray(ctor.deps)) {
        for (const depTag of ctor.deps) {
            paths.push(...collectCssPaths(depTag, seen));
        }
    }

    return paths;
}