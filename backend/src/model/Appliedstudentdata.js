const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/courseManagement');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name:String,
    address:String,
    email:String,
    gender:String,
    skill:String,
    qualification:String,
    passout:Number,
    course:String,
    district:String,
    professor:String,
    status:String,
    stdtcount:Number
});


var Appliedstudentdata = mongoose.model('appliedStudentdata',StudentSchema);

module.exports = Appliedstudentdata;