// import React, {useState} from "react";
// import axios from "axios";


// // const getFurniture = () =>{
// //     axios.get('api/furniture')
// //         .then((furniture) => {
// //             const data = furniture.data;
// //             console.log('Got the stuff');
// //         })
// //         .catch(() => {
// //             alert('Error getting the stuff');
// //         });
// // }


// // const searchBar = () => {
// //     const [products, setProducts] = useState([]);
// // }

// const getFurnitureAxios = axios.get('api/furniture')
//   .then(function (response) {
//     onSuccess(response)
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


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

// const Furniture = mongoose.model('furnitures', furnitureSchema);

// function onSuccess(response) {
//     var array = response;
//   var arrayLength = Object.keys(array).length 
//     console.log(arrayLength)
//    for(var i = 0; i <= arrayLength; i++) {
//         var name = array.data[i].name;
//         var Url = array.data[i].imageUrl;
//         var des = array.data[i].description;
//         var price = array.data[i].price;
//         var stock = array.data[i].countInStock;
//         var store = array.data[i].storeName;

//       console.log( name + " " + imageUrl + " " + desc + " " + price + " " + stock + " " + store);

//       assignDataValue(name, desc, url, price, stock, store);
//     }
// }

// function assignDataValue(name, desc, url, price, stock, store) {
//     var upData = new furnitures()
//        upData.name = name;
//        upData.description = desc;
//        upData.url = url;
 
//        upData.save();
//  }

//  //ini gimana ?
// // const searchBar = () => {
// //     furnitures.find({}, function(err, furnitures) {
// //         if (err) return console.error(err);
// //         console.log(furnitures);
// //     });
// // }

                        
// // 3000/testing