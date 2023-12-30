import { useParams } from 'react-router-dom';
import data from '../data/products'
import Nav from '../components/Nav';
import "../styles/product-page.css"

export default function ProductPage() {
  let { id } = useParams();
  const product = data.find(p => p.id === id);

  return (
    <>
        <Nav />
        <div className="wrapper">
            <div className="product--page--img">
              <img src={`../src/assets/${product.img}`} />
            </div>
            <div className="product--page--info ">
              <p className="product--page--name">{product.name}</p>
              <p className="product--page--price">{product.price}</p>
              <p className="product--page--description">{product.longDescription}</p>
              <button className="add--cart">Add to cart</button>
            </div>
        </div>
    </>
  );
}
