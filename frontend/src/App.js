import React from "react";
import Header from "./components/Header";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Testing from "./pages/Testing";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return(

    <main>  
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/products" element={<Products />} exact/>
          <Route path="/cart" element={<Cart />} exact/> 
          <Route path="/Login" element={<Login />} exact/>
          
          {/* <AuthProvider>  
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}>

            <a className="w-100" style={{ maxWidth: "400px" }}>
          */}
          <Route path="/Signup" element={<Signup />} exact/>
          {/* </a>
          </Container>
          </AuthProvider> */}
          
          <Route path="/Testing" element={<Testing />} exact/>
        </Routes>
        
      </div>
    </main>
  );
};


export default App