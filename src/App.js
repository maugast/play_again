import './App.scss';import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer 
        greeting = "Bienvenidos!"
      />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
