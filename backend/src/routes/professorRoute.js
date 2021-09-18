const express = require('express');
const ProfessorRouter = express.Router(); 
const Professordata= require('../model/Professordata');


ProfessorRouter.post('/signup',function(req,res){

  // console.log(req.body);
  var Professor ={
      firstname : req.body.professor.firstname,
      lastname: req.body.professor.lastname,
      email:req.body.professor.email,
      confirmpass:req.body.professor.confirmpass,
  }
  var Professor =new Professordata(Professor);
  Professor.save();
});


module.exports = ProfessorRouter;