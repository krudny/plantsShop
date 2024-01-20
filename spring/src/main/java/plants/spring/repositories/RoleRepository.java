package plants.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import plants.spring.models.ERole;
import plants.spring.models.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
