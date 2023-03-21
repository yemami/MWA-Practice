const mongoose = require("mongoose");
const Order = require("../models/order");
const Restaurant = require("../models/restaurant")
const { calculateTotalPrice, calculateSubTotalPrice } = require("../utils");
const { sendEmail, sendReceiptEmail } = require("../utils/email");

exports.createOrder = async (req, res, next) => {
  try {
    const data = req.body;
    data.user = req.user.id
    data.subTotal = calculateSubTotalPrice(data.items)
    data.total = calculateTotalPrice(data.subTotal)
    console.log(data)

    // create order
    const order = await Order.create(data);

    // email the order receipt
    await sendReceiptEmail(req.user.email, order)

    res.json(order);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.setRating = async (req, res, next) => {
  try {
    const { order_id } = req.params;
    const { rating, restaurants } = req.body;
    const { id: user } = req.user;

    const resp = await Order.updateOne({
      _id: mongoose.Types.ObjectId(order_id),
    }, { 
      $set: { rating }
    });

    const response = await Restaurant.updateMany({
      _id: { $in: restaurants },
    }, { 
      $push: { allRatings: { rating, user } },
      $set: { rating }
    });
    
    res.json(response);
  } catch (err) {
    next(err);
  }
};

// get all orders for current user
exports.getAllOrders = async (req, res, next) => {
  try {
    const { id: user } = req.user;
    const response = await Order.find({ user }).sort({ createdAt: -1 });
    res.json(response);
  } catch (err) {
    next(err);
  }
};
