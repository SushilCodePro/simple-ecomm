
export async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        // console.log('API DATA', data);
        return data;
    } catch (error) {
        console.error('Error while fetching the products:', error);
        throw error; 
    }
}
