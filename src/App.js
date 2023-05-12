import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.js"
import ItemDetail from "./Components/ItemDetail/ItemDetail"
import { CartProvider } from './Components/Context/CartContext';
import Cart from "./Components/Cart/Cart.js"
import Checkout from './Components/Checkout/Checkout';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
        <NavBar/>
        <Routes>
        <Route exact path= "/" element ={<ItemListContainer greeting= {"Bienvenidos a mi Tienda,un lugar especial!"}/>} />
        <Route exact path= "/category/:categoryId" element ={<ItemListContainer/>} />
        <Route exact path= "/item/:itemID" element = {<ItemDetailContainer/>}/>
        <Route exact path= "/item/" element = {<ItemDetail/>}/>
        <Route path ="*" element = {<h1>404 NOT FOUND</h1>}/>
        <Route path="/cart" element ={<Cart/>}></Route>
        <Route path="/checkout" element ={<Checkout/>}></Route>
        </Routes>
        </CartProvider>
      </div>
      
    
      </BrowserRouter>
  );
}

export default App;
