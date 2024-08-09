import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const[cartItems,setCartItems]=useState([]);
  return (
    <div className="App">
    
       <Router>
        <div >
          <ToastContainer theme='dark' position='top-center'/>
            <Header cartItems={cartItems}/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/search' element={<Home/>}></Route>
                <Route path='/product/:id' element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
                <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}></Route>

            </Routes>
        </div>
      </Router>
      <div style={{width:"100vw",height:"5rem"}}></div>
       <Footer/>
    </div>
  );
}

export default App;
