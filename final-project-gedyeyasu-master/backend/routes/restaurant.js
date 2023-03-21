const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant");

router.post("/", restaurantController.createRestaurant);
router.get("/", restaurantController.getRestaurants);
router.get("/categories", restaurantController.getRestaurantsCategory);
router.get("/near-me", restaurantController.getRestaurantsNearMe);
router.get("/favorites", restaurantController.getFavoriteRestaurants);
router.get("/:restaurant_id/menus", restaurantController.getRestaurant);
router.get("/menus/search", restaurantController.findMenu);
router.post("/:restaurant_id:/menus", restaurantController.addRestaurantMenu);

module.exports = router;
