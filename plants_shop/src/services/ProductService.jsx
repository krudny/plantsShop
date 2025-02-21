import cachedAxios from "../utils/axiosConfig.jsx";

const API_ENDPOINT = "products";
const config = { cache: { maxAge: 10 * 60 * 1000 } };

const ProductService = {
  getProductById: async (id) => {
    try {
      const response = await cachedAxios.get(`${API_ENDPOINT}/${id}`, config);
      return response.data;
    } catch (error) {
      console.error("Error fetching product details:", error);
      throw error;
    }
  },

  getAllProducts: async (currentPage, itemsPerPage) => {
    try {
      const response = await cachedAxios.get(`${API_ENDPOINT}?page=${currentPage}&size=${itemsPerPage}`, config);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  addProduct: async (product) => {
    try {
      const response = await cachedAxios.post(`${API_ENDPOINT}`, product);
      return response.data;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  },

  updateProduct: async (product) => {
    try {
      const response = await cachedAxios.put(
        `${API_ENDPOINT}/${product.product_id}`,
        product,
      );
      return response.data;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  },

  deleteProduct: async (id) => {
    try {
      await axios.delete(`${API_ENDPOINT}/${id}`);
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },
};

export default ProductService;
