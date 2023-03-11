const data = require("../model/courseModel");

module.exports.getClasses = async (req, res, next) => {
  try {
    const { course_id, student_id } = req.params;
    const result = await data.findOne(
      { _id: course_id, "students._id": student_id },
      //{ "students.$": 1 } 
      {"students.classes" :1}
      );
    res.json(result.students[0].classes);
  } catch (e) {
    next(e);
  }
};
module.exports.addClass = async (req, res, next) => {
  try {
    const { course_id, student_id } = req.params;
    const new_class = req.body;

    const result = await data.updateOne(
      { _id: course_id, "students._id": student_id },
      { $push: { "students.$.classes": new_class } }
    );

    res.json({ success: true, data: result });
  } catch (e) {
    next(e);
  }
};
module.exports.getClassById = async (req, res, next) => {
  try {
    const { course_id, student_id, class_id } = req.params;

    const result = await data.findOne(
      { _id: course_id, "students._id": student_id },
      { "students.$": 1 }
    );

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Class not found" });
    }

    const student = result.students[0];
    const classObj = student.classes.find((c) => c._id.toString() === class_id);

    if (!classObj) {
      return res
        .status(404)
        .json({ success: false, message: "Class not found" });
    }

    res.json({ success: true, data: classObj });
  } catch (e) {
    next(e);
  }
};
module.exports.deleteClassById = async (req, res, next) => {
  try {
    const { course_id, student_id, class_id } = req.params;
    const result = await data.updateOne(
      { _id: course_id, "students._id": student_id },
      { $pull: { "students.$.classes": { _id: class_id } } }
    );

    res.json(result);
  } catch (e) {
    next(e);
  }
};

module.exports.updateClassById = async (req, res, next) => {
  try {
    const { course_id, student_id, class_id } = req.params;
    const { className, teacher } = req.body;
    const result = await data.updateOne(
      { _id: course_id, "students._id": student_id },
      {
        $set: {
          "students.$.classes.$[myclass].className": className,
          "students.$.classes.$[myclass].teacher": teacher,
        },
      },
      { arrayFilters: [{ "myclass._id": class_id }] }
    );
    res.json(result);
  } catch (e) {
    next(e);
  }
};
