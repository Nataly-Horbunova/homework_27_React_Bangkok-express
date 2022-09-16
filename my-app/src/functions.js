export function findCategories(products) {
    return products.reduce((acc, product) => {
        const isPresent = acc.find(category => category === product.category);
        if (!isPresent) acc.push(product.category);
        return acc;
    }, [])
}

function filterByCategory(products, categoryFilter) {
    return products.filter((product) => {
        if (categoryFilter === "All") {
            return product;
        } else if (product.category === categoryFilter) {
            return product;
        } 
    return null;
    });
}

function filterByVegetatian(products, vegeterianFilter) {
    return products.filter((product) => {
        if (vegeterianFilter === false) {
            return product;
        } else if (product.vegeterian === vegeterianFilter) {
            return product;
        } 
    return null;
});
}

function filterByNuts(products, noNutsFilter) {
    return products.filter((product) => {
        if (noNutsFilter === false) {
            return product;
        } else if (!product.nuts === noNutsFilter) {
            return product;
        } 
    return null;
});
}

function filterBySpiciness(products, spicinessFilter) {
    return products.filter((product) => {
        return product.spiciness <= spicinessFilter;
});
}

export function filterProducts(products, categoryFilter, vegeterianFilter, noNutsFilter, spicinessFilter) { 
    const filteredByCategory = filterByCategory(products, categoryFilter);
    const filteredBySpiciness = filterBySpiciness(filteredByCategory, spicinessFilter);
    const filteredByvegetarian = filterByVegetatian(filteredBySpiciness, vegeterianFilter);
    const flteredByNuts = filterByNuts(filteredByvegetarian, noNutsFilter);
    return flteredByNuts;
}

export function countTotalPrice(cart) {
    return cart.reduce((acc, item) => {
        return acc += item.price*item.count;
    }, 0)
}

export function countTotalCount(cart) {
    return cart.reduce((acc, item) => {
        return acc += item.count;
    }, 0)
}

export function createOrder(cart, name, email, tel, address) {
    return {
        cart,
        delivery: {
            name,
            email,
            tel,
            address
        }
    }
}


