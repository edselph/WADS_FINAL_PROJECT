import React, {useState} from "react";
import axios from "axios";
import mongoose from "mongoose";
import cors from "cors";




function Testing(){

// getFurniture.use(cors);

// const getFurniture = axios.get('api/furniture')
//     .then(function (response) {
//         console.log(response)
//     })    
//     .catch(function (error) {
//         console.log(error);
//     }  
// );

//v1-work
// const getFurniture = () => {
//     axios.get('http://localhost:5000/api/furniture')
//     .then((response) => {
//         console.log(response)
//     }
//     );
//   }

const PORT = process.env.PORT || 5070;

const getFurniture = () => {
    axios.get(`${PORT}api/furniture`)
    .then((response) => { 
        console.log(response)
    }
    );
  }

// var furnitureSchema = mongoose.Schema({
//     name:{
//         type: String,
//         required: true
//     },
//     imageUrl:{
//         type: String,
//         required: true
//     },
//     description:{
//         type: String,
//         required: true
//     },
//     price:{
//         type: Number,
//         required: true
//     },
//     countInStock:{
//         type: Number,
//         required: true
//     },
//     storeName:{
//         type: String,
//         required: true
//     },
// });
// s
// const Furniture = mongoose.model('furnitures', furnitureSchema);

// function onSuccess(response) {
//     var array = response;
//     var arrayLength = Object.keys(array).length 
//     console.log(arrayLength)
//     for(var i = 0; i <= arrayLength; i++) {
//         var name = array.data[i].name;
//         var Url = array.data[i].imageUrl;
//         var des = array.data[i].description;
//         var price = array.data[i].price;
//         var stock = array.data[i].countInStock;
//         var store = array.data[i].storeName;

//         console.log( name + " " + imageUrl + " " + desc + " " + price + " " + stock + " " + store);

//         assignDataValue(name, desc, url, price, stock, store);
//     }
// }

// function assignDataValue(name, desc, url, price, stock, store) {
//     var upData = new furnitures()
//         upData.name = name;
//         upData.description = desc;
//         upData.url = url;
    
//         upData.save();
//     }

  return <div>Hello this is the data <button onClick={getFurniture}>Get data</button></div>
}

// 


export default Testing;