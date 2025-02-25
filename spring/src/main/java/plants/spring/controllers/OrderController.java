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
import plants.spring.services.OrderService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/orders")
@AllArgsConstructor
public class OrderController {
    private final OrderService orderService;

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
