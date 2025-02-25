package plants.spring.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import plants.spring.models.Order;


@Repository
public interface OrderRepository extends PagingAndSortingRepository<Order, Long>, JpaRepository<Order, Long> {
    Page<Order> findByUserId(Long userId, Pageable pageable);

}
