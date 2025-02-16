import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products'; // Replace with your actual backend URL

const ProductService = {
    getProductById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching product details:', error);
            throw error;
        }
    },

    getAllProducts: async () => {
        try {
            const response = await axios.get(`${API_URL}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    addProduct: async (product) => {
        try {
            const response = await axios.post(`${API_URL}`, product);
            return response.data;
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    },

    updateProduct: async (product) => {
        try {
            const response = await axios.put(`${API_URL}/${product.product_id}`, product);
            return response.data;
        } catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }
    },

    deleteProduct: async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    },
};

export default ProductService;
