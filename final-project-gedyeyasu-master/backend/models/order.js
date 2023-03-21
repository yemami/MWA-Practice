const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    subTotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    deliveryAddress: {
      state: { type: String, required: false },
      city: { type: String, required: false },
      street: { type: String, required: false },
      zipCode: { type: Number, required: false },
    },
    rating: {
      type: Number,
      required: false
    },
    items: [
      {
        restaurantId: mongoose.Types.ObjectId,
        category: String,
        name: String,
        price: Number,
        image: String,
        description: String,
        amount: Number,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Order", orderSchema);
