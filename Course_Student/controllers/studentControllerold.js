
const data = require("../model/courseModel");

module.exports.getAllStudents = async (req, res, next) => {
  try {
    const { course_id } = req.params;
    const result = await data.findOne({ _id: course_id }, { students: 1,_id:0 }); // {'students._id':0}=>hides the ID
    res.json(result);
  } catch (e) {
    next(e);
  }
};

module.exports.AddNewStudent = async (req, res, next) => {
  try {
    const { course_id } = req.params;
    const new_student = req.body;
    const result = await data.updateOne(
      { _id: course_id },
      { $push: { students: new_student } }
    );
    res.json(result);
  } catch (e) {
    next(e);
  }
};

module.exports.deleteStudentById = async (req, res, next) => {
  try {
    const { course_id, student_id } = req.params;
    const result = await data.updateOne(
      { _id: course_id },
      { $pull: { students: { _id: student_id } } }
    );
    res.json(result);
  } catch (e) {
    next(e);
  }
};

module.exports.updateStudentById = async (req, res, next) => {
  try {
    const { course_id, student_id } = req.params;
    const { name, grade } = req.body;
    const results = await data.updateOne(
      { _id: course_id, "students._id": student_id },
      { $set: { "students.$.name": name, "students.$.grade": grade } }
    );
    res.json(results);
  } catch (e) {
    next(e);
  }
};

module.exports.getStudentById = async (req, res, next) => {
  try {
    const { course_id, student_id } = req.params;
    
    const result  = await data.findOne({_id : course_id ,'students._id' : student_id}
    ,{'students.$':1 ,_id:0}) ; //{ "students.$": 1, _id: 0 }

    res.json(result) ; 

  } catch (e) {
    next(e);
  }
};
