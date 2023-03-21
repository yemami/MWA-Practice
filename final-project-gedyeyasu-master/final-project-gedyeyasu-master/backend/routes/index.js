const authRoute = require("./auth");
const restaurantRoute = require("./restaurant");
const orderRoute = require("./order");
const userRoute = require("./user");
const checkToken = require("../middlewares/checkToken");

module.exports = (app) => {
  app.use("/api/auth", authRoute);
  app.use("/api/restaurant", restaurantRoute);
  app.use("/api/orders", checkToken, orderRoute);
  app.use("/api/users", checkToken, userRoute);
};
