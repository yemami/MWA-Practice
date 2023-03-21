const User = require("../models/user");

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    const data = req.body;
    const result = await User.updateOne({ _id: id }, { ...data });
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    const result = await User.findOne(
      {
        _id: id,
      },
      { firstName: 1, lastName: 1, email: 1, phone: 1, address: 1 }
    );
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
