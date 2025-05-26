/**
 * @typedef {{ id: string, name: string, price: number, img: string, description: string, colors: string[]}} Product
 */

/**
 * @param {number} page Page Number
 * @param {string} name Name query, returns includes
 * @returns {Promise<Product[]>}
 */
function getProducts(page = 1, name = "") {
    return new Promise((resolve, reject) => {
        fetch("/assets/dummy/products.json")
            .then(response => {
                if (!response.ok) {
                    reject("HTTP error " + response.status)
                }
                
                const res = response.json()
                res.then((v) => {
                    setTimeout(() => {
                        const data = v.filter(obj => obj["name"].toLowerCase().includes(name.toLowerCase()))
                        
                        const start = (page - 1) * 12
                        const end = page * 12

                        resolve(data.slice(start, end))
                    }, 300)
                })
            })
            .catch(function () {
                reject("Fetch Error")
            })
    })
}

/**
 * @param {string} id Product id
 * @returns {Promise<Product | null>} Product Data
 */
function getProduct(id = "") {
    return new Promise((resolve, reject) => {
        fetch("/assets/dummy/products.json")
            .then(response => {
                if (!response.ok) {
                    reject("HTTP error " + response.status)
                }
                
                const res = response.json()
                res.then((v) => {
                    setTimeout(() => {
                        resolve(v.find(prod => prod["id"] === id))
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
        fetch("/assets/dummy/products.json")
            .then(response => {
                if (!response.ok) {
                    // throw new Error("HTTP error " + response.status);
                    reject("HTTP error " + response.status)
                }
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