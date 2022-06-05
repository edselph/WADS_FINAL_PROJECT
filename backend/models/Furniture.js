    const mongoose = require('mongoose');

// this is the inside of products model
const furnitureSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    storeName:{
        type: String,
        required: true
    },
});

const Furniture = mongoose.model('furnitures', furnitureSchema);
module.exports = Furniture;