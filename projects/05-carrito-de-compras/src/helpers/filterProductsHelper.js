export default function filterProductsHelper(products, filters) {
    if (products.length >= 0) {
        return products.filter(product => {
            return product.price >= filters.minPrice && (
                filters.category === 'all' || product.category === filters.category
            );
        });
    } 
    return [];
}