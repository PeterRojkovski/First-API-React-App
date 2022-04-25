import React from 'react'
import CounterExample from './Components/CounterExample.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import background from './picture.jpg' 
import Home from './Views/Home.js';
import About from './Views/About.js';
import Product from './Views/Product.js';

function App() {
  return (
    <div>

      
      <BrowserRouter>
        <Header/>
      {/*<CounterExample/>*/}

        <div className="p-3">
          <Routes>
              <Route path="/" element={<Home/>}>
                
              </Route>
              <Route path="/about" element={<About/>}>
                
              </Route>
              <Route path="/products/:id" element={<Product/>}>
                
              </Route>
            </Routes>
        </div>
        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
