
const data = require("../model/courseModel");
//get all student from database
module.exports.getAllStudents = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const result = await data.findOne({_id:course_id}); // one course
    // console.log(result) //just for sample 
    // const result = await data.find({}); //list of course
    res.send(result.students)
  } catch (e) {
    next(e);
  }
};
// push  new student to the list
module.exports.AddNewStudent = async (req, res, next) => {
  try {
    const course_id = req.params.course_id
    const newStudent = req.body
    const result = await data.updateOne({_id:course_id},{$push:{students:newStudent}})
    res.send(result)

  } catch (e) {
    next(e);
  }
};
//delete students from the list
module.exports.deleteStudentById = async (req, res, next) => {
  try {
    const course_id = req.params.course_id
    const student_id = req.params.student_id
    const result = await data.updateOne({_id:course_id},{$pull:{"students._id":student_id}})
    res.send(result)
  } catch (e) {
    next(e);
  }
};
//update student from the list
module.exports.updateStudentById = async (req, res, next) => {
  try {
    const course_id = req.params.course_id
    const student_id = req.params.student_id
    const updatedStudent = req.body
    const result = await data.updateOne({_id:course_id, "students._id": student_id},{$set:{"students.$":updatedStudent}})
    res.send(result)
   
  } catch (e) {
    next(e);
  }
};

// get student by id from the list
module.exports.getStudentById = async (req, res, next) => {
  try {
    const course_id = req.params.course_id
    const student_id = req.params.student_id
    const result = await data.findOne({_id:course_id, "students._id": student_id})
    res.send(result)   
  } catch (e) {
    next(e);
  }
};
