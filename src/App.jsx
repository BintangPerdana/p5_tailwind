import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ListProduct from './pages/ListProduct';
import DetailProduct from './pages/DetailProduct';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ListProduct />} />
          <Route path='/products/:id' element={<DetailProduct />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}
