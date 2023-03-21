const  mongoose  = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const studentSchema = new mongoose.Schema({
  _id: objectId,
  name: String,
  grade: Number,
  classes: [
    {
      _id: objectId,
      className: String,
      teacher: String,
    },
  ],
});

const courseSchema = new mongoose.Schema({
  title: String,
  students: [studentSchema],
});

module.exports = mongoose.model("Course", courseSchema);


