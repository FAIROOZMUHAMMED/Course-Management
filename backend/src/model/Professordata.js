const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/courseManagement');
const Schema = mongoose.Schema;

const ProfessorSchema = new Schema({
    firstname:String,
    lastname:String,
    email : {type :String, unique:true },
    confirmpass:String
});

var Professordata = mongoose.model('professordata',ProfessorSchema);

module.exports = Professordata;