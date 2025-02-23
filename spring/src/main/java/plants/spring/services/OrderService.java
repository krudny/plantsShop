package plants.spring.services;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plants.spring.dtos.request.OrderItemRequest;
import plants.spring.dtos.request.OrderRequest;
import plants.spring.dtos.response.OrderItemResponse;
import plants.spring.dtos.response.OrderResponse;
import plants.spring.models.Order;
import plants.spring.models.OrderItem;
import plants.spring.models.Product;
import plants.spring.models.User;
import plants.spring.repositories.OrderItemRepository;
import plants.spring.repositories.OrderRepository;
import plants.spring.repositories.ProductRepository;
import plants.spring.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderService {
    private OrderRepository orderRepository;
    private OrderItemRepository orderItemRepository;
    private ProductRepository productRepository;
    private UserRepository userRepository;

    @Transactional
    public Order createOrder(OrderRequest orderRequest){
        User user = userRepository.findById(orderRequest.getUserID())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Order order = new Order(user);
        for(OrderItemRequest orderItemRequest: orderRequest.getOrderItemRequests()){
            Product product = productRepository.findById(orderItemRequest.getProductID())
                    .orElseThrow(() -> new RuntimeException("Product not found"));
            order.addItem(product, orderItemRequest.getQuantity(), product.getPrice());
        }


        return orderRepository.save(order);
    }

    public List<OrderResponse> getUserOrders(Long userID){
        List<Order> userOrders = orderRepository.findByUserId(userID);
        return userOrders.stream()
                .map(order -> {
                    List<OrderItem> orderItems = orderItemRepository.findByOrder_OrderId(order.getOrderId());
                    List<OrderItemResponse> orderItemResponses = orderItems.stream().map(orderItem -> {
                        Product product = productRepository.findById(orderItem.getProduct_id())
                                .orElseThrow(() -> new RuntimeException("Product not found"));
                        return new OrderItemResponse(product.getName(), orderItem.getPrice(), orderItem.getQuantity());
                    })
                            .collect(Collectors.toList());
                    return new OrderResponse(order.getOrderId(), order.getOrderDate(), orderItemResponses);
                }).collect(Collectors.toList());
    }
}
