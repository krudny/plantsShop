package plants.spring.security;

import org.springframework.aot.hint.annotation.RegisterReflectionForBinding;
import org.springframework.context.annotation.Configuration;
import plants.spring.dtos.request.LoginRequest;
import plants.spring.dtos.request.OrderItemRequest;
import plants.spring.dtos.request.OrderRequest;
import plants.spring.dtos.request.SignUpRequest;
import plants.spring.dtos.response.JwtResponse;
import plants.spring.dtos.response.MessageResponse;
import plants.spring.dtos.response.OrderItemResponse;
import plants.spring.dtos.response.OrderResponse;

@RegisterReflectionForBinding(value = {
        LoginRequest.class,
        OrderItemRequest.class,
        OrderRequest.class,
        SignUpRequest.class,
        JwtResponse.class,
        MessageResponse.class,
        OrderItemResponse.class,
        OrderResponse.class
})
@Configuration
public class ReflectionConfig {}