package plants.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plants.spring.models.Product;
import plants.spring.repositories.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product addProduct(Product product) {
//        System.out.println(product);
        return productRepository.save(product);
    }

    public void updateProduct(Product product) {
        if (productRepository.existsById(product.getId())) {
            productRepository.save(product);
        }
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
