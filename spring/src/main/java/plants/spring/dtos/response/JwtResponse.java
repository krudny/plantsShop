package plants.spring.dtos.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;


@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {
    @JsonProperty("token")
    private String token;

    @JsonProperty("type")
    private String type;

    @JsonProperty("id")
    private Long id;

    @JsonProperty("username")
    private String username;

    @JsonProperty("email")
    private String email;

    @JsonProperty("roles")
    private List<String> roles;

    public JwtResponse(@JsonProperty("token") String token,
                       @JsonProperty("id") Long id,
                       @JsonProperty("username") String username,
                       @JsonProperty("email") String email,
                       @JsonProperty("roles") List<String> roles) {
        this(token, "Bearer", id, username, email, roles);
    }
}
