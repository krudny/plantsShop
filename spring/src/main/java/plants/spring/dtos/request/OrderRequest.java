package plants.spring.dtos.request;

import java.util.List;

public record OrderRequest(Long userID, List<OrderItemRequest> orderItemRequests) {
}
