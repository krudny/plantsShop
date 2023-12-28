import "../styles/products.css"
import Product from "./Product"
import data from "../data/products"

export default function Products(){
    const products = data.map((item) => {
        return (
          <Product key={item.id} item={item} />
        )
    })
    return (
        <div className="products--wrapper">
            <div className="products--grid">
                {products}
            </div>
        </div>
    )
}