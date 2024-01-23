package plants.spring.services;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plants.spring.dtos.request.OrderItemRequest;
import plants.spring.dtos.request.OrderRequest;
import plants.spring.models.Order;
import plants.spring.models.Product;
import plants.spring.models.User;
import plants.spring.repositories.OrderRepository;
import plants.spring.repositories.ProductRepository;
import plants.spring.repositories.UserRepository;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public Order createOrder(OrderRequest orderRequest){
        User user = userRepository.findById(orderRequest.userID())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Order order = new Order(user);

        for(OrderItemRequest orderItemRequest: orderRequest.orderItemRequests()){
            Product product = productRepository.findById(orderItemRequest.productID())
                    .orElseThrow(() -> new RuntimeException("Product not found"));

            order.addItem(product, orderItemRequest.quantity(), product.getPrice());
        }

        return orderRepository.save(order);
    }
}
