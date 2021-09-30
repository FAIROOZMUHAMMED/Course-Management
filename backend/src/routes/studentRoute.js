const express = require('express');
const StudentRouter = express.Router(); 
const Studentdata= require('../model/Studentdata');
const Coursedata= require('../model/Coursedata');
const AppliedStddata= require('../model/Appliedstudentdata');

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

StudentRouter.get('/courses',function(req,res){
  Coursedata.find()
        .then(function(data){
            res.send(data);
          })
});

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
// ,{"status":null}

// StudentRouter.get('/enrolledlist',function(req,res){
//   AppliedStddata.find({status: "accepted"})
//     .then(data=>{ 
//         res.send(data)
       
//     })
// });

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