import React, {useState} from "react";
import axios from "axios";
import mongoose from "mongoose";
import cors from "cors";



function Testing(){

    const[furniture, setFurniture] = useState([]);

    const getFurnitures = () => {
        axios.get("http://localhost:5000/api/furniture")
        .then(res => {
            console.log(res.data.content);
            setFurniture(res.data.content);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return( 
    <div>
        <h1>Hello this is the data</h1>
            <button onClick={getFurnitures}>Get the data</button> 
            <p>{furniture}</p>
    </div>
    );
}

export default Testing;


  // const getfurniture = () => {
    //     axios.post(BASEURL, Furniture)
    //     .then((response) => {
    //         console.log(response)
    //     }
    //     )
    //     .catch((error) => {
    //         console.log(error)
    //     }
    //     );
    // }


//     const BASEURL = 'https://localhost:5000/api/furniture/';
//     const [furniture, setFurniture] = useState([]);

//     const Furniture = {
//         name: this.state.name,
//         description: this.state.description,
//         imageUrl: this.state.imageUrl,
//         price: this.state.price,
//         countInStock: this.state.countInStock,
//         storeName: this.state.storeName
//     }

//     useEffect(() => {
//         const getfurniture = async () => {
//             const { data: res} = await axios.get(BASEURL);
//             setFurniture(res);
//         };
//         getfurniture();
//     },[])


//     return( 
//     <div>
//         <h1>Hello this is the data {Furniture}</h1>
//     </div>
//     );
// }

// // 