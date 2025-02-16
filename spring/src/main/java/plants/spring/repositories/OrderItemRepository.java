package plants.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import plants.spring.models.OrderItem;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
    List<OrderItem> findByOrder_OrderId(Long orderOrderId);
}
