const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        products: [
            {
                productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
                quantity: { type: Number, required: true },
                totalPrice: { type: Number, required: true },
            }
        ],
        totalAmount: { type: Number, required: true },
        status: { type: String, default: "pending" },
        paymentStatus: { type: String, default: "pending" },
        paymentMethod: { type: String },
        trackingNumber: { type: String },
        shippingAddress: {
            apartment: String,
            city: String,
            state: String,
            postalCode: String,
            country: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
