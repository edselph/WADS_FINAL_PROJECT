require("dotenv").config();
const furnitureData = require("./data/furnitures");
const db = require("./server.js");
const Furniture = require("./models/Furniture");

db();

const importData = async () => {
  try {
    await Furniture.deleteMany({});

    await Furniture.insertMany(furnitureData);

    console.log("Data has been imported successfully");

    process.exit();
  } catch (error) {
    console.error("Error on importing data", error);
    process.exit(1);
  }
};

importData();
