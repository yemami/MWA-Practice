const data = require("../model/courseModel");
//get all class instide student belongs to course
module.exports.getClasses = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const student_id = req.params.student_id;
    const result = await data.findOne({_id:course_id, "students._id":student_id}, {"students.$":1})
    res.send(result.classes)
  
  } catch (e) {
    next(e);
  }
};
//update class inside student belongs to course
module.exports.addClass = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const student_id = req.params.student_id;
    const newClass = req.body;
    // update course with student id and push new class to the list
    const result = await data.updateOne({_id:course_id, "students._id":student_id},{$push:{"students.$.classes":newClass}})
     res.send(result)
  
  } catch (e) {
    next(e);
  }
};
//get class by id from student 
module.exports.getClassById = async (req, res, next) => {
  try {
    const course_id = req.params.course_id
    const student_id = req.params.student_id
    const class_id = req.params.class_id
    const result = await data.findOne({_id:course_id, "students._id":student_id}, {"students.$":1})
    const classResult = result.students[0].classes.find((item) => item._id == class_id)
   res.send(classResult)

    //const result = await data.findOne({_id:course_id, "students._id":student_id,"classes._id":class_id})
    //res.send(result)
  } catch (e) {
    next(e);
  }
};
//delete class by id from student
module.exports.deleteClassById = async (req, res, next) => {
  try {
    const course_id = req.params.course_id
    const student_id = req.params.student_id
    const class_id = req.params.class_id
    const result = await data.updateOne({_id:course_id, "students._id":student_id},{$pull:{"students.$.classes._id":class_id}})
    res.send(result);
  
  } catch (e) {
    next(e);
  }
};
//update class by id from student
module.exports.updateClassById = async (req, res, next) => {
  try {
    const course_id = req.params.course_id
    const student_id = req.params.student_id
    const class_id = req.params.class_id
    const newClass = req.body;
    const result = await data.updateOne({_id:course_id, "students._id":student_id, "students.classes._id":class_id},{$set:{"students.$.classes.$":newClass}})
    res.send(result)
    // const result = await data.updateOne({_id:course_id, "students._id":student_id}, {$set:{"students.$[cls].": newClass}, {arrayFilters:[]}})
  } catch (e) {
    next(e);
  }
};
