package plants.spring.dtos.request;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {
    @JsonProperty("userID")
    private Long userID;

    @JsonProperty("orderItemRequests")
    private List<OrderItemRequest> orderItemRequests;
}