package plants.spring.repositories;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import plants.spring.models.Product;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
