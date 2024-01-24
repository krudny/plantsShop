package plants.spring.models;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long product_id;
    private String image;
    private String name;
    private String description;
    private double price;
    private String long_description;

    public Product(){}

    public Product(Long id, String image, String name, String description, double price, String long_description) {
        this.product_id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
        this.long_description = long_description;
    }

    public Long getId() {
        return product_id;
    }

    public void setId(Long product_id) {
        this.product_id = product_id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getLong_description() {
        return long_description;
    }

    public void setLong_description(String long_description) {
        this.long_description = long_description;
    }

    @Override
    public String toString() {
        return "Product{" +
                "product_id=" + product_id +
                ", image='" + image + '\'' +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", long_description='" + long_description + '\'' +
                '}';
    }
}
