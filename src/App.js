import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.js"
import ItemDetail from "./Components/ItemDetail/ItemDetail"
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
        <Route exact path= "/" element ={<ItemListContainer greeting= {"Bienvenidos a mi Tienda"}/>} />
        <Route exact path= "/category/:categoryId" element ={<ItemListContainer/>} />
        <Route exact path= "/item/:itemID" element = {<ItemDetailContainer/>}/>
        <Route exact path= "/item/" element = {<ItemDetail/>}/>
        <Route path ="*" element = {<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </div>
      

      </BrowserRouter>
  );
}

export default App;
