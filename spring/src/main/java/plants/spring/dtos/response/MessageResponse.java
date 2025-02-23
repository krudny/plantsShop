package plants.spring.dtos.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MessageResponse {
    @JsonProperty("message")
    private String message;
}
