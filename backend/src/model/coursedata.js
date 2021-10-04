const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/courseManagement');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    coursename:String,
    duration:Number,
    email:String,
    courseFee:Number,
    description:String,
});

var Coursedata = mongoose.model('coursedata',CourseSchema);

module.exports = Coursedata;