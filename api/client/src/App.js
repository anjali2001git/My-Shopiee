import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App=()=>{
   const user=useSelector((state)=>state.user.currentUser);
   
   return <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/products/:category" element={<ProductList />} />
           <Route path="/cart" element={<Cart />} /  >
           <Route path="/product/:id" element={<Product/>} />
           <Route path="/success" element={<Success/>}></Route>
           <Route path="/register" element={user?<Home/>:<Register />} />
           <Route path="/Login" element={user?<Home/>:<Login/>}/>
        </Routes>   
          </Router>
};

export default App;
