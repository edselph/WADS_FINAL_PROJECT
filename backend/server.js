require("dotenv").config();
const express = require("express");
const furnitureRoutes = require("./routes/furnitureRoutes.js");
const connectDB = require("./config/db.js");

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

app.use("/api/furniture", furnitureRoutes);
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

