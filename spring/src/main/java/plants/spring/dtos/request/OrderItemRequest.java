package plants.spring.dtos.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemRequest {
    @JsonProperty("productID")
    private Long productID;

    @JsonProperty("quantity")
    private int quantity;
}
