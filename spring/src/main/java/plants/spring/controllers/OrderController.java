package plants.spring.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import plants.spring.dtos.request.OrderRequest;
import plants.spring.dtos.response.OrderResponse;
import plants.spring.models.Order;
import plants.spring.models.Product;
import plants.spring.services.OrderService;
import plants.spring.services.ProductService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest orderRequest){
        try {
            orderService.createOrder(orderRequest);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/user/{userID}")
    public ResponseEntity<?> getUserOrders(@PathVariable Long userID, @PageableDefault(page = 0, size = 2) Pageable pageable){
        Page<OrderResponse> orderResponse = orderService.getUserOrders(userID, pageable);
        return new ResponseEntity<>(orderResponse, HttpStatus.OK);
    }
}
