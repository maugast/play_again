import './App.scss';

//Components
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Pages
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ErrorPage from './components/pages/ErrorPage';
import DetailPage from './components/pages/DetailPage';
import Cart from './components/Cart/Cart';
import {CartProvider} from './context/CartContext';

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter >
          <NavBar />
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/productos' element={<Products />}/>
              <Route path='/productos/:id' element={<DetailPage />}/>
              <Route path='/nosotros' element={<About/>} />
              <Route path='/contacto' element={<Contact />}/>
              <Route path= '/nosotros' element={<About />}/>
              <Route path='*' element={<ErrorPage />}/>
              <Route path='/cart' element={<Cart />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
