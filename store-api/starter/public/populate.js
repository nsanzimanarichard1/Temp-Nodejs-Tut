document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/v1/products');
            const products = response.data.products;

            products.forEach(product => {
                const listItem = document.createElement('li');
                listItem.textContent = product.name;
                productList.appendChild(listItem);
            });
        } catch (error) {
            
            console.error('Error fetching products:', error);
        }
    };

    fetchProducts();
});
