package plants.spring.dtos.response;

import java.util.Date;
import java.util.List;

public record OrderResponse(Long orderID, Date orderDate, List<OrderItemResponse> products) {
}
