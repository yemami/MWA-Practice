const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");

router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrders);
router.patch("/:order_id/rating", orderController.setRating);
module.exports = router;
