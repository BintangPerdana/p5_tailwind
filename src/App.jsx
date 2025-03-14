import './index.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ListProduct from './pages/ListProduct';
import DetailProduct from './pages/DetailProduct';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ListProduct />} />
          <Route path='/products/:id' element={<DetailProduct />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

function BaseLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}