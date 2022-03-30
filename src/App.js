import './App.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './components/pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path='/contacto' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
