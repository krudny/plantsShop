import { useParams } from 'react-router-dom';
import data from '../data/products'

export default function ProductPage() {
  let { id } = useParams();
  const product = data.find(p => p.id === id);

  return (
    <div>
      
    </div>
  );
}
