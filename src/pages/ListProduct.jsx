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
    <>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {products.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate('/products/' + item.id)}
            className="bg-white shadow-lg rounded-xl p-4 w-60 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
          >
            <img
              src={item.image}
              className="w-full h-70 object-contain rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
            <div className="text-xl font-bold text-green-600 mt-2">${item.price}</div>
          </div>
        ))}
      </div>
    </>

  )
}

export default ListProduct