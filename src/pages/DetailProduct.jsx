import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const DetailProduct = () => {

  const { id } = useParams();

  const [products, setProducts] = useState({})

  const fetchData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products/' + id)
    setProducts(res.data)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      ini detail product dari id: {id}
      <h3>{products?.title}</h3>
      <h5>{products?.category}</h5>
      <div>{products?.price}</div>
      <div>{products?.description}</div>
      <div>
        <img src={products?.image} style={{ width: 100 }} />
      </div>
      <div>{products?.rating?.rate} ({products?.rating?.count})</div>
    </div>
  )
}

export default DetailProduct