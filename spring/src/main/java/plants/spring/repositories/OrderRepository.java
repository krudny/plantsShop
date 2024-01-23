package plants.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import plants.spring.models.Order;
import plants.spring.models.User;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUser(User user);

    Order findByIdAndUser(Long id, User user);
}
