package plants.spring.security.jwt;

import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.*;
import com.nimbusds.jwt.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import plants.spring.security.serives.UserDetailsImpl;
import java.text.ParseException;
import java.util.Date;

@Component
public class JwtUtils {

    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${app.jwtSecret}")
    private String jwtSecret;

    @Value("${app.jwtExpirationMs}")
    private int jwtExpirationMs;

    public String generateJwtToken(Authentication authentication) {
        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        try {
            JWSSigner signer = new MACSigner(jwtSecret.getBytes());

            JWTClaimsSet claimsSet = new JWTClaimsSet.Builder()
                    .subject(userPrincipal.getUsername())
                    .issueTime(new Date())
                    .expirationTime(new Date(System.currentTimeMillis() + jwtExpirationMs))
                    .build();

            SignedJWT signedJWT = new SignedJWT(
                    new JWSHeader(JWSAlgorithm.HS256),
                    claimsSet
            );

            signedJWT.sign(signer);

            return signedJWT.serialize();
        } catch (JOSEException e) {
            logger.error("Błąd generowania JWT: {}", e.getMessage());
            throw new RuntimeException("Nie udało się wygenerować tokena JWT", e);
        }
    }

    public String getUserNameFromJwtToken(String token) {
        try {
            SignedJWT signedJWT = SignedJWT.parse(token);
            return signedJWT.getJWTClaimsSet().getSubject();
        } catch (ParseException e) {
            logger.error("Błąd parsowania JWT: {}", e.getMessage());
            throw new RuntimeException("Nie udało się pobrać nazwy użytkownika z JWT", e);
        }
    }

    public boolean validateJwtToken(String authToken) {
        try {
            SignedJWT signedJWT = SignedJWT.parse(authToken);
            JWSVerifier verifier = new MACVerifier(jwtSecret.getBytes());
            return signedJWT.verify(verifier);
        } catch (JOSEException | ParseException e) {
            logger.error("Niepoprawny JWT: {}", e.getMessage());
            return false;
        }
    }
}
