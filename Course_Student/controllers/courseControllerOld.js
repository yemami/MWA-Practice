const data = require("../model/courseModel");

module.exports.getCourses = async (req, res, next) => {
  try {
    const result = await data.find();

    res.json(result);
  } catch (e) {
    next(e);
  }
};
module.exports.addCourse = async (req, res, next) => {
  try {
    const new_course = req.body;
    const result = await data.create(new_course);

    res.json({ success: true, data: result });
  } catch (e) {
    next(e);
  }
};
module.exports.getCoursesById = async (req, res, next) => {
  try {
    const { course_id } = req.params;
    const result = await data.findOne({ _id: course_id }, { _id: 0 });
    res.json(result);
  } catch (e) {
    next(e);
  }
};
module.exports.deleteCourseById = async (req, res, next) => {
  try {
    const { course_id } = req.params;
    const result = await data.deleteOne({ _id: course_id });
    res.json("deleted succesfully");
  } catch (e) {
    next(e);
  }
};

module.exports.updateCourseById = async (req, res, next) => {
  try {
    const { title } = req.body;
    //const new_titile = req.body.title ; 
    const { course_id } = req.params;

    const result = await data.updateOne(
      { _id: course_id },
      { $set: { title: title } }
    );
    res.json({ Succesfully: "updated", data: result });
  } catch (e) {
    next(e);
  }
};
