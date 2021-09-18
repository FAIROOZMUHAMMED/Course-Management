const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/courseManagement');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstname:String,
    lastname:String,
    email : {type :String,require: true, unique:true },
    confirmpass:String
});

var Studentdata = mongoose.model('studentdata',StudentSchema);

module.exports = Studentdata;