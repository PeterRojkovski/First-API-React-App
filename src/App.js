import React from 'react'
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
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
