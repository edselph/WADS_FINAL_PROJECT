const Furniture = require("../models/Furniture");

const getFurnitures = async (req, res) => {
  try {
    const furnitures = await Furniture.find({});
    res.json(furnitures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getFurnitureById = async (req, res) => {
  try {
    const furniture = await Furniture.findById(req.params.id);

    res.json(furniture);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getFurnitures: getFurnitures,
  getFurnitureById: getFurnitureById,
};
