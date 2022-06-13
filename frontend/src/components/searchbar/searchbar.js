// import React, { useState } from "react";
// import axios from "axios";

// function Testing() {
//   const [furniture, setFurniture] = useState({});
//   const getFurnitures = () => {
//     axios
//       .get("https://evening-chamber-92951.herokuapp.com/api/furniture")
//       .then((res) => {
//         console.log(res.data);
//         setFurniture(res.data.content);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//   };

// //   return (
// //     <div>
// //       <h1>Search for Furniture</h1>
// //       <input type="text" placeholder="search???" />
// //       <button onClick={getFurnitures}>Get the data</button>
// //       <p>
// //         {furniture.map((val, index) => {
// //           return <div key={index}>{val.name}</div>;
// //         })}
// //       </p>
// //     </div>
// //   );
// // }

// // export default Testing;

// // v1
// // const [furniture, setFurniture] = useState([]);
// // const getFurnitures = () => {
// //   axios
// //     .get("http://localhost:5000/api/furniture")
// //     .then((res) => {
// //       console.log(res.data);
// //       setFurniture(res.data.content);
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // };
