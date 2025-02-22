package plants.spring.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "order_items")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemId;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    @ToString.Exclude
    private Order order;

    private Long product_id;
    private int quantity;
    private double price;

    public OrderItem(Order order, Long product_id, int quantity, double price) {
        this.order = order;
        this.product_id = product_id;
        this.quantity = quantity;
        this.price = price;
    }
}
