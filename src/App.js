import './App.css';
import Barradetareas from "./Components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    
      <div className="App">
        <Barradetareas />
        <ItemListContainer greeting= {"Bienvenidos a mi Tienda"}/>
        
      </div>

    
  );
}

export default App;
