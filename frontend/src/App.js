import React from "react";

import Header from "./components/Header";
// import Products from "./Products";
import './App.css';

const App = () => {
  return(
    
    <div className="Header">
      <Header />
      <div className="Main">

            <div className="empty-space">
            <br />
            <br />
              <div className="Furnica-intro">
              Furnica is a web application made to help locally independent furniture seller to able to make day end meet.<br />
              Furnica provide business owners with a place to sell their products. Customers that use Furnica will be protected<br /> 
              by insurance when furnishes were purchased in a poor quality.
                
                <div className="Furnica-Products">
                  <h2>
                    Best sellers:
                  </h2>
                  <ul>
                    <li>
                      <img src="https://m.media-amazon.com/images/I/81r1MGjG9bL._AC_SX466_.jpg" className="furnica-img" />
                      <h3>Product Name:</h3>
                      <p>
                       Price:  
                      </p>
                      <p>
                       Store Name:   
                      </p>                      
                      <p>
                       <button className="button-display">Add to Cart</button>
                      </p>
                    </li>
                    <li>
                      <img src="https://m.media-amazon.com/images/I/81r1MGjG9bL._AC_SX466_.jpg" className="furnica-img" />
                      <h3>Product Name:</h3>
                      <p>
                       Price:  
                      </p>
                      <p>
                       Store Name:   
                      </p>
                      <p>
                       <button className="button-display">Add to Cart</button>
                      </p>
                    </li>
                    <li>
                      <img src="https://m.media-amazon.com/images/I/81r1MGjG9bL._AC_SX466_.jpg" className="furnica-img" />
                      <h3>Product Name:</h3>
                      <p>
                       Price:  
                      </p>
                      <p>
                       Store Name:   
                      </p>
                      <p>
                       <button className="button-display">Add to Cart</button>
                      </p>
                    </li>
                    <li>
                      <img src="https://m.media-amazon.com/images/I/81r1MGjG9bL._AC_SX466_.jpg" className="furnica-img" />
                      <h3>Product Name:</h3>
                      <p>
                       Price:  
                      </p>
                      <p>
                       Store Name:   
                      </p>
                      <p>
                      <button className="button-display">Add to Cart</button>
                      </p>
                    </li>
                    <li>
                      <img src="https://m.media-amazon.com/images/I/81r1MGjG9bL._AC_SX466_.jpg" className="furnica-img" />
                      <h3>Product Name:</h3>
                      <p>
                       Price:  
                      </p>
                      <p>
                       Store Name:   
                      </p>
                      <p>
                      <button className="button-display">Add to Cart</button>
                      </p>
                    </li>
                    <li>
                      <img src="https://m.media-amazon.com/images/I/81r1MGjG9bL._AC_SX466_.jpg" className="furnica-img" />
                      <h3>Product Name:</h3>
                      <p>
                       Price:  
                      </p>
                      <p>
                       Store Name:   
                      </p>
                      <p>
                      <button className="button-display">Add to Cart</button>
                      </p>
                    </li>
                  </ul>
                  <div className="empty-space">
                    <br />

                      <button className="button-now">
                        Shop Now!
                      </button>
                  
                  </div>
                </div>  
              </div>
            </div>
      </div>
  </div>
  );
};


export default App