import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ListProduct = () => {
  const navigate = useNavigate()

  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    setProducts(res.data)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      {products.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <h5>{item.category}</h5>
          <div>{item.price}</div>
          <div>
            <img src={item.image} style={{ width: 100 }} />
          </div>
          <button onClick={() => navigate('/products/' + item.id)}>Lihat Detail</button>
          <br /><br />
        </div>
      ))}
    </div>
  )
}

export default ListProduct