const mongoose = require("mongoose");
const dummy = require("mongoose-dummy");

const restaurantSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    cusine: { type: String, required: true },
    description: { type: String, required: true },
    category: [String],
    picture: {
      cover: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      logoUrl: {
        type: String,
        required: true,
      },
    },
    rating: {
      type: Number,
      required: true,
    },
    allRatings: [{
      rating: { type: Number },
      user: { type: mongoose.Types.ObjectId, ref: 'User' }
    }],
    deliveryTime: {
      type: Number,
      required: true,
    },
    deliveryRadius: {
      type: Number,
      required: true,
    },
    location: [Number, Number],
    address: {
      state: { type: String, required: true },
      city: { type: String, required: true },
      street: { type: String, required: true },
      zipCode: { type: Number, required: true },
    },
    menus: [
      {
        restaurantId: mongoose.Types.ObjectId,
        name: String,
        image: String,
        description: String,
        price: Number,
      },
    ],
    reviews: [
      {
        title: String,
        description: String,
        rating: Number,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
restaurantSchema.index({ location: "2d" });
restaurantSchema.index({ "menus.name": "text" });
const restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = restaurant;
