import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="Furnica-pic">
    <img src="https://i.ibb.co/4dRT58N/FURNICA-Renovate-your-home.png" width="700px" height="350px" />
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
            <h3>
              Ergonomic Office Chair with Adjustable Lumbar
            </h3>
            <p>
             Price: $150  
            </p>
            <p>
             Store Name: EdStore  
            </p>                      
            <p>
             <button className="button-display">Add to Cart</button>
            </p>
          </li>
          <li>
            <img src="https://cdn.shopify.com/s/files/1/0044/1208/0217/products/DIVAMBMESHCHAIRBLACK_OLDIVMBMESHCHRBLK_02_2000x.jpg?v=1601293179" className="furnica-img" />
            <h3>
              Nilkamal Diva Mid Back Mesh Chair
            </h3>
            <p>
             Price: $105 
            </p>
            <p>
             Store Name: EdStore 
            </p>
            <p>
             <button className="button-display">Add to Cart</button>
            </p>
          </li>
          <li>
            <img src="https://cdn.shopify.com/s/files/1/0044/1208/0217/products/3NilkamalGaryVisitorChaircataloguecopy_2000x.jpg?v=1653543821" className="furnica-img" />
            <h3>Nilkamal Gary Visitor Chair</h3>
            <p>
             Price: $93
            </p>
            <p>
             Store Name: Edstore
            </p>
            <p>
             <button className="button-display">Add to Cart</button>
            </p>
          </li>
          <li>
            <img src="https://m.media-amazon.com/images/I/518zIlKRIpS._SS400_.jpg" className="furnica-img" />
            <h3>Dinner table</h3>
            <p>
             Price: $99 
            </p>
            <p>
             Store Name: The Furniture store
            </p>
            <p>
            <button className="button-display">Add to Cart</button>
            </p>
          </li>
          <li>
            <img src="https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dwf2b9fee9/images/048/95/48957039-1.jpg?sw=1000&sh=1000&sm=fit" className="furnica-img" />
            <h3>Study table</h3>
            <p>
             Price: $167
            </p>
            <p>
             Store Name: The Furniture store  
            </p>
            <p>
            <button className="button-display">Add to Cart</button>
            </p>
          </li>
          <li>
            <img src="https://res.cloudinary.com/ruparupa-com/image/upload/w_360,h_360,f_auto,q_auto/f_auto,q_auto:eco/v1523915213/Products/X147098_1.jpg" className="furnica-img" />
            <h3>Dinner table:</h3>
            <p>
             Price: $190 
            </p>
            <p>
             Store Name: Edstore
            </p>
            <p>
            <button className="button-display">Add to Cart</button>
            </p>
          </li>
        </ul>
        <div className="empty-space">
          <br />

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home