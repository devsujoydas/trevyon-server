const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },

    image: { type: String },
    imageGallery: [{ type: String }],

    price: {
      netPrice: { type: Number, required: true },
      discountPrice: { type: Number },
      discountPercentage: { type: Number },
    },


    productInfo: {
      category: { type: String, default: "" },
      stock: { type: Number, default: 0 },
      sold: { type: Number, default: 0 },
      sku: { type: String, default: "" },
    },

    rating: {
      average: { type: Number, default: 0 },
      reviews: [
        {
          userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          rating: { type: Number, min: 1, max: 5 },
          comment: { type: String },
        },
      ],
    },


    benefits: [{ type: String }],
    ingredients: [{ type: String }], 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
