package plants.spring.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import plants.spring.dtos.request.OrderRequest;
import plants.spring.dtos.response.OrderResponse;
import plants.spring.models.Order;
import plants.spring.repositories.OrderRepository;
import plants.spring.services.OrderService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/orders")
@AllArgsConstructor
public class OrderController {

    private OrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest orderRequest){
        try {
            Order createdOrder = orderService.createOrder(orderRequest);
            return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/user/{userID}")
    public ResponseEntity<?> getUserOrders(@PathVariable Long userID){
        List<OrderResponse> orderResponse = orderService.getUserOrders(userID);
        return new ResponseEntity<>(orderResponse, HttpStatus.OK);
    }
}
