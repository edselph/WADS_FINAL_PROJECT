const express = require("express");
const furnitureRoutes = require("./routes/furnitureRoutes.js");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// connectDB();
// const app = express();
// app.use(express.json());
// app.get("/", (req, res) => {
//   res.json({ message: "API is running..." });
// });
// app.use("/api/furniture", furnitureRoutes);
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// the new one v1
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

const MONGO_URI =
  "mongodb+srv://admin1:admin1@cluster1.vu0jwrp.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5070;

// mongoose.connect(MONGO_URI)
//   .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
//   .catch((error) => console.log("Error connecting to MongoDB")); 
//   // .finally(() => console.log("MongoDB connected"));


// app.use("/furniture", furnitureRoutes);

mongoose.connect(MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/api/furniture", furnitureRoutes);


app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});


app.use(express.urlencoded({ extended: true }));







// the cause of error

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`
//   )}).on('error', function(err) {

//     process.once('SIGUSR2', function() {
//       process.kill(process.pid, 'SIGUSR2');
//   });
//     process.on('SIGINT', function() {
//       process.kill(process.pid, 'SIGINT');
//     });
//     process.on('uncaughtException', function(err) {
//       console.log(" Uncaught Exception: ");
//       console.log("[Inside 'uncaughtException' event] " );

//     });
//   });

// app.get("/test", (req, res) => {
//   res.json({ message: "API is running..." });
// });
