package plants.spring.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name= "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @ToString.Exclude
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    @ToString.Exclude
    private Set<OrderItem> items = new HashSet<>();

    @Temporal(TemporalType.TIMESTAMP)
    private Date orderDate;

    public Order(User user) {
        this.user = user;
        this.orderDate = new Date();
    }

    public void addItem(Product product, int quantity, double price) {
        OrderItem item = new OrderItem(this, product.getProductID(), quantity, price);
        items.add(item);
    }
}
