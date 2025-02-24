package plants.spring.dtos.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.Date;
import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class OrderResponse {
    @JsonProperty("orderID")
    private Long orderID;

    @JsonProperty("orderDate")
    private Date orderDate;

    @JsonProperty("items")
    private List<OrderItemResponse> items;
}
