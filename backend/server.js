const express = require("express");
const furnitureRoutes = require("./routes/furnitureRoutes.js");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

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
