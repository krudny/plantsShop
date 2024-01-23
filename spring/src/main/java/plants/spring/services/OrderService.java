package plants.spring.services;

import jakarta.transaction.Transactional;
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
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

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

    public List<OrderResponse> getUserOrders(Long userID){
//        List<Order> orderList = orderRepository.findByUserId(userID);
//        List<OrderResponse> orderResponseList = new ArrayList<>();
//        for (Order order : orderList) {
//            orderResponseList.add(
//                    new OrderResponse(
//                            order.getId(),
//                            order.getOrderDate(),
//                            orderItemRepository.findByOrderId(order.getId())));
//        }
//        return orderResponseList;
        List<Order> userOrders = orderRepository.findByUserId(userID);
        return userOrders.stream()
                .map(order -> {
                    List<OrderItem> orderItems = orderItemRepository.findByOrderId(order.getId());
                    List<OrderItemResponse> orderItemResponses = orderItems.stream()
                            .map(orderItem -> new OrderItemResponse(orderItem.getProduct().getId(), orderItem.getPrice(), orderItem.getQuantity()))
                            .collect(Collectors.toList());
                    return new OrderResponse(order.getId(), order.getOrderDate(), orderItemResponses);
                }).collect(Collectors.toList());
    }
}
