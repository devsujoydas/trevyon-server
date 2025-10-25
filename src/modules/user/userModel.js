const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },

    phone: { type: String, trim: true ,default: "" },
    profilePhotoUrl: { type: String, default: "" },

    role: { type: String, enum: ["user", "admin"], default: "user" },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },

    gender: { type: String, enum: ["male", "female", "other"] },
    dateOfBirth: { type: Date },

    addresses: [
      {
        type: { type: String, enum: ["shipping", "billing"], default: "shipping" },
        apartment: { type: String, trim: true, default: "" },
        city: { type: String, trim: true, default: "" },
        state: { type: String, trim: true, default: "" },
        postalCode: { type: String, trim: true, default: "" },
        country: { type: String, trim: true, default: "" },
        isDefault: { type: Boolean, default: false, }
      }
    ],

    cart: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
        updatedAt: { type: Date, default: Date.now },
      }
    ],

    wishlist: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
        addedAt: { type: Date, default: Date.now },
      }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
