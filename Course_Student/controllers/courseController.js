const data = require("../model/courseModel");
//get all course
module.exports.getCourses = async (req, res, next) => {
  try {
    const result = await data.find({});
    res.send(result);
   
  } catch (e) {
    next(e);
  }
};

//createn courses
module.exports.addCourse = async (req, res, next) => {
  try {
    const newCourse = req.body;
    const result = await data.create(newCourse);
    res.send(result);
    
  } catch (e) {
    next(e);
  }
};
//get course from database by Id
module.exports.getCoursesById = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const result = await data.find({_id:course_id})
    res.send(result)
   
  } catch (e) {
    next(e);
  }
};
module.exports.deleteCourseById = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const result = await data.deleteOne({_id:course_id})
    res.send(result)
   
  } catch (e) {
    next(e);
  }
};

module.exports.updateCourseById = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const updatedCourse = req.body;
    // const result = await data.updateOne({_id:course_id}, {...updatedCourse});
    const result = await data.updateOne({_id:course_id}, {title: updatedCourse.title, students: updatedCourse.students});
    res.send(result)
    
  } catch (e) {
    next(e);
  }
};
