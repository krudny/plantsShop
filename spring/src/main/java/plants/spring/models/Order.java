package plants.spring.models;

import jakarta.persistence.*;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name= "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<OrderItem> items = new HashSet<>();

    @Temporal(TemporalType.TIMESTAMP)
    private Date orderDate;

    public Order(){
        this.orderDate = new Date();
    }

    public Order(User user) {
        this.user = user;
        this.orderDate = new Date();
    }

    public void addItem(Product product, int quantity, double price) {
        OrderItem item = new OrderItem(this, product, quantity, price);
        items.add(item);
    }
}
