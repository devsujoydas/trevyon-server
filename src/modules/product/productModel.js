const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, default: "" },
    
    image: { type: String },
    imageGallery: [{ type: String }],

    price: { type: Number, required: true },
    discountPrice: { type: Number },
    discountPercentage: { type: Number },

    stock: { type: Number, default: 0 },

    rating: {
      average: { type: Number, default: 0 },
      users: [{ type: String }], 
    },

    benefits: [{ type: String }],
    ingredients: [{ type: String }],
    attributes: { type: Object },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
