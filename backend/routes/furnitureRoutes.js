const express = require("express");
const router = express.Router();
  
const { getFurnitures, getFurnitureById } = require("../controller/furnitureControllers");

router.get("/", getFurnitures);
router.get("/:id", getFurnitureById);

module.exports = router;