package plants.spring.security.jwt;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class AuthEntryPointJwt implements AuthenticationEntryPoint {
    private static final Logger logger = LoggerFactory.getLogger(AuthEntryPointJwt.class);
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)
            throws IOException, ServletException {

        logger.error("Błąd autoryzacji: {}", authException.getMessage());

        int errorCode = HttpServletResponse.SC_UNAUTHORIZED;
        String errorMessage = "Error: Unauthorized";

        if (authException.getCause() != null) {
            String causeMessage = authException.getCause().getMessage().toLowerCase();

            if (causeMessage.contains("expired")) {
                errorCode = HttpServletResponse.SC_UNAUTHORIZED;
                errorMessage = "Error: Token Expired";
            } else if (causeMessage.contains("signature")) {
                errorCode = HttpServletResponse.SC_UNAUTHORIZED;
                errorMessage = "Error: Invalid Token Signature";
            } else if (causeMessage.contains("credentials")) {
                errorCode = HttpServletResponse.SC_FORBIDDEN;
                errorMessage = "Error: Invalid Credentials";
            } else if (causeMessage.contains("access denied")) {
                errorCode = HttpServletResponse.SC_FORBIDDEN;
                errorMessage = "Error: Access Denied";
            }
        }

        response.sendError(errorCode, errorMessage);
    }
}