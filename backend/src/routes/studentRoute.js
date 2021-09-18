const express = require('express');
const StudentRouter = express.Router(); 
const Studentdata= require('../model/Studentdata');


StudentRouter.post('/signup',function(req,res){

  // console.log(req.body);
  var Student ={
      firstname : req.body.student.firstname,
      lastname: req.body.student.lastname,
      email:req.body.student.email,
      confirmpass:req.body.student.confirmpass,
  }
  var Student =new Studentdata(Student);
  Student.save();
});

module.exports = StudentRouter;