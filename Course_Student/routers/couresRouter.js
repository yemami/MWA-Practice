const express = require("express");
const router = express.Router();
const {
  getCourses,
  addCourse,
  getCoursesById,
  deleteCourseById,
  updateCourseById,
} = require("../controllers/courseController");

const {
  getAllStudents,
  AddNewStudent,
  deleteStudentById,
  updateStudentById,
  getStudentById,
} = require("../controllers/studentController");

const {
  addClass,
  getClasses,
  getClassById,
  deleteClassById,
  updateClassById
} = require("../controllers/classController");

router.get("/", getCourses);
router.post("/", addCourse);
router.get("/:course_id", getCoursesById);
router.delete("/:course_id", deleteCourseById);
router.put("/:course_id", updateCourseById);

//student router

router.get("/:course_id/students", getAllStudents);
router.get("/:course_id/students/:student_id", getStudentById);
router.post("/:course_id/students", AddNewStudent);
router.delete("/:course_id/students/:student_id", deleteStudentById);
router.put("/:course_id/students/:student_id", updateStudentById);

//class router
router.post("/:course_id/students/:student_id/classes", addClass);
router.get("/:course_id/students/:student_id/classes", getClasses);
router.get("/:course_id/students/:student_id/classes/:class_id", getClassById);

router.delete("/:course_id/students/:student_id/classes/:class_id", deleteClassById);

 router.put("/:course_id/students/:student_id/classes/:class_id", updateClassById);

module.exports = router;
