const headers = {"Content-Type": "application/json"};
const baseHttp = "https://dummyjson.com/products";

export async function getProducts({limit, skip, category, text}) {
    const page = `${!text ? "?" : "&"}limit=${limit}&skip=${skip}`;
    const categories =
        (category === "all" || !category) ? "" : `/category/${category}`;
    const url = `${baseHttp}${categories}${!text ? "" : `/search?q=${text}`}${page}`;
    const res = await fetch(url);
    return await res.json();
}

export async function getProductById(id) {
    const res = await fetch(`${baseHttp}/${id}`);
    return await res.json();
}

export async function getProductByCategories() {
    const res = await fetch(`${baseHttp}/categories`);
    return await res.json();
}

export async function addNewProduct(data) {
    const res = await fetch(`${baseHttp}/add`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
    });
    return await res.json();
}

export async function editProduct(data, id) {
    const res = await fetch(`${baseHttp}/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
    });
    return await res.json();
}

export async function deleteProduct(id) {
    const res = await fetch(`${baseHttp}/${id}`, {
        method: "DELETE",
    });
    return await res.json();
}
