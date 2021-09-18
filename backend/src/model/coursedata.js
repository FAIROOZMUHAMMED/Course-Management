const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/courseManagement');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    firstname:String,
    lastname:String,
    confirmpass:String
});

var Coursedata = mongoose.model('coursedata',CourseSchema);

module.exports = Coursedata;