package plants.spring.dtos.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import plants.spring.models.Product;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemResponse {
    @JsonProperty("quantity")
    private int quantity;

    @JsonProperty("product")
    private Product product;
}
