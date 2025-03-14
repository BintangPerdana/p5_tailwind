import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

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
    <>
      <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl w-250 h-115 content-center p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-75 flex justify-center">
              <img src={products?.image} className="w-full h-auto max-h-80 object-contain rounded-lg p-3" />
            </div>

            <div className="md:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">{products?.title}</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1"><FaStar color="gold"/>{products?.rating?.rate} ({products?.rating?.count})</p>
                <div className="text-2xl font-bold text-green-600 mt-2">$ {products?.price}</div>
                <div className="text-gray-700 mt-2">{products?.description}</div>
                {/* <h5 className="">{products?.category}</h5> */}
              </div>

              {/* Button */}
              <div className="mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                <FaBasketShopping />Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailProduct