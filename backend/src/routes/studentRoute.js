const express = require('express');
const StudentRouter = express.Router(); 
const Bcrypt=require('bcryptjs');
const Studentdata= require('../model/Studentdata');
const Coursedata= require('../model/Coursedata');
const AppliedStddata= require('../model/Appliedstudentdata');

StudentRouter.post('/signup',function(req,res){
  const hash = Bcrypt.hashSync(req.body.student.confirmpass, 10);
  // console.log(req.body);
  var Student ={
      firstname : req.body.student.firstname,
      lastname: req.body.student.lastname,
      email:req.body.student.email,
      confirmpass:hash,
  }
  var Student =new Studentdata(Student);
  Student.save();
});

StudentRouter.get('/courses',function(req,res){
  // console.log("data")
  Coursedata.find().then(function(data){
          
            res.send(data);
    
          })
});

StudentRouter.get('/:id',(req,res)=>{
  id=req.params.id;
  Studentdata.findOne({"_id":id})
  .then(data=>{
      res.send(data)
  })
})


StudentRouter.get('/course/:id',function(req,res){

  const id = req.params.id;
  Coursedata.findOne({"_id":id})
      .then((course)=>{
          res.send(course);
      });
});

StudentRouter.post('/apply',function(req,res){
  var studentdetails = {       
    name:req.body.student.name,
    address:req.body.student.address,
    email :req.body.student.email,
    gender:req.body.student.gender,
    skill:req.body.student.skill,
    qualification:req.body.student.qualification,
    passout:req.body.student.passout,
    course:req.body.student.course,
    district:req.body.student.district,
    professor:req.body.student.professor,
    status:null
}       
var student = new AppliedStddata(studentdetails);
student.save();
});


StudentRouter.get('/list',function(req,res){
  AppliedStddata.find({"status":null})
  .then(data=>{
      res.send(data)
  })
});

StudentRouter.get('/applied/:email',function(req,res){

  const email = req.params.email;
  AppliedStddata.find(
    {$and:[
      {"professor":email },
      {"status":null}
    ]
    }
    )
      .then((Stddata)=>{
          res.send(Stddata);
      });
});


StudentRouter.get('/enrolledlist/:email',function(req,res){
  const email = req.params.email;
  AppliedStddata.find(
    {$and:[
      {"professor":email },
      {status: "accepted"}
    ]
    }
    // {status: "accepted"}
    )
    .then(data=>{ 
        res.send(data)
       
    })
});

module.exports = StudentRouter;