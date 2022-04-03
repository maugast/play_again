import './App.scss';

//Components
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Pages
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ErrorPage from './components/pages/ErroPage';
import DetailPage from './components/pages/DetailPage';

function App() {
  return (
    <div>
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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
