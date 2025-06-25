import { URL } from "../constants/apiUris";

export async function listProducts() {
    const mapProducts = (product) => ({
        id: product.id,
        title: product.title,
        description: product.description,
        category: product.category,
        price: product.price,
        thumbnail: product.thumbnail,
    });
    
    return fetch(URL)
        .then(response => response.json())
        .then(data => {
            return data.products;
        }).then(products => {
            return products.map(mapProducts);
        })
        .catch(error => {
            throw new Error(error.message);
        });
}
