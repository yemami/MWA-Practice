const Restaurant = require("../models/restaurant");
const { geoApi } = require("../config/environment");

exports.createRestaurant = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await Restaurant.create(data);
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.getRestaurants = async (req, res, next) => {
  try {
    const result = await Restaurant.find({}).limit(8);
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.getRestaurantsCategory = async (req, res, next) => {
  try {
    const result = await Restaurant.aggregate([
      { $unwind: "$category" },
      { $group: { _id: "$category" } },
      { $limit: 6 },
    ]);
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// search restaurants near a zip code
exports.getRestaurantsNearMe = async (req, res, next) => {
  try {
    const apiUrl = geoApi;
    const { zipCode } = req.query;
    const rawData = await fetch(apiUrl + zipCode);
    const coordinates = await rawData.json();
    console.log(coordinates);
    const { latitude, longitude } = coordinates.output[0];
    console.log(coordinates.output[0]);

    const response = await Restaurant.find({
      location: {
        $near: [+latitude, +longitude],
      },
    })
      .limit(6)
      .exec((err, data) => {
        res.json(data);
      });
  } catch (err) {
    next(err);
  }
};

exports.getFavoriteRestaurants = async (req, res, next) => {
  try {
    const response = await Restaurant.find({
      location: {
        $near: {
          $geometry: { type: "Point", coordinates: [lng, lat] },
          $maxDistance: 1000,
        },
      },
    })
      .limit(6)
      .sort({ rating: 1 });
    res.json(response);
  } catch (err) {
    next(err);
  }
};

exports.getRestaurant = async (req, res, next) => {
  try {
    const { restaurant_id } = req.params;
    console.log(req.params);
    const response = await Restaurant.findOne({
      _id: restaurant_id,
    });
    res.json(response);
  } catch (err) {
    next(err);
  }
};

exports.findMenu = async (req, res, next) => {
  try {
    const { searchQuery } = req.query;
    console.log(req.query);
    const response = await Restaurant.find(
      {
        $text: { $search: searchQuery },
      },
      { menus: 1, _id: 1, name: 1 }
    );
    res.json(response);
  } catch (err) {
    next(err);
  }
};

exports.addRestaurantMenu = async (req, res, next) => {
  try {
    const { restaurant_id } = req.params;
    const data = req.body;
    const response = await Restaurant.updateOne(
      { _id: +restaurant_id },
      {
        $push: { menus: data },
      }
    );
    res.json(response);
  } catch (err) {
    next(err);
  }
};
