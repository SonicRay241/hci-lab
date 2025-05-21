/**
 * @typedef {{ id: string, name: string, price: number, img: string, description: string}} Product
 */

/**
 * @param {number} page Page Number
 * @returns {Promise<Product[]>} The latest items of the shop
 */
function getProducts(page = 1) {
    return new Promise((resolve, reject) => {
        fetch("/assets/dummy/products.json")
            .then(response => {
                if (!response.ok) {
                    // throw new Error("HTTP error " + response.status);
                    reject("HTTP error " + response.status)
                }
                
                const res = response.json()
                res.then((v) => {
                    // console.log(v);
                    // Simulate delay in db select
                    setTimeout(() => {
                        const start = (page - 1) * 10
                        const end = page * 10 + 1

                        resolve(v.slice(start, end))
                    }, 300)
                })
            })
            .catch(function () {
                reject("Fetch Error")
            })
    })
}

/**
 * @param {number} page Page Number
 * @returns {Promise<Product[]>} The latest items of the shop
 */
function getNewArrivals(take = 10) {
    return new Promise((resolve, reject) => {
        console.log("Triggered getProducts");

        fetch("/assets/dummy/products.json")
            .then(response => {
                if (!response.ok) {
                    console.log("Not ok");
                    // throw new Error("HTTP error " + response.status);
                    reject("HTTP error " + response.status)
                }
                console.log("Ok?");
                const res = response.json()
                res.then((v) => {
                    // Simulate delay in db select
                    setTimeout(() => {
                        resolve(v.slice(0, take))
                    }, 300)
                })

            })
            .catch(function () {
                reject("Fetch Error")
            })
    })
}