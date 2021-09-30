const express = require('express');
const ProfessorRouter = express.Router(); 
const Professordata= require('../model/Professordata');
const Coursedata= require('../model/Coursedata');
const AppliedStddata= require('../model/Appliedstudentdata');
const nodemailer=require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

ProfessorRouter.post('/signup',function(req,res){
  var Professor ={
      firstname : req.body.professor.firstname,
      lastname: req.body.professor.lastname,
      email:req.body.professor.email,
      confirmpass:req.body.professor.confirmpass,
  }
  var Professor =new Professordata(Professor);
  Professor.save();
});

ProfessorRouter.post('/createcourse',function(req,res){
  var Course = {       
    coursename:req.body.item.coursename,
    duration:req.body.item.duration,
    email:req.body.item.email,
    courseFee:req.body.item.courseFee,
    description:req.body.item.description,
}       
var course= new Coursedata(Course);
course.save();
console.log('saved')

});

ProfessorRouter.put('/deleteStudent',function(req,res){
  id=req.body._id;
  AppliedStddata.findByIdAndUpdate({"_id":id},
                               {$set:{"status" : "rejected",
                               }})
  .then(function(){
      res.send();
  })
});

ProfessorRouter.put('/acceptStudent',function(req,res){
  id=req.body._id;
  AppliedStddata.findByIdAndUpdate({"_id":id},
                               {$set:{"status" : "accepted",
                               }})
  .then(function(){
      res.send();
  })
});

ProfessorRouter.get('/course/:email',function(req,res){
  const email = req.params.email;
  Coursedata.find({"email":email })
      .then((Course)=>{
          res.send(Course);
      });

});
ProfessorRouter.get('/sendmail',function(req,res){
const course=req.body.course;
    
// AppliedStddata.find({course:course,status:"accepted"}, function(error, allUsers){
//     if(error){
//         console.log(error);
//     }
//     var mailList = [];
//     allUsers.forEach(function(users){
//         mailList.push(users.email);
//         return mailList;
//     });
//     var smtpTransport = nodemailer.createTransport({
//         service: 'Gmail', 
//         auth: {
//             user: '',
//             pass: ""
//         }
//     });
//     var mailOptions = {
//             to: [],
//             bcc: mailList,
//             from: '',
//             subject: 'Form Accepted',
//             html: '<h1>Congratulations..! </h1> \n<h4> This mail is sent from the course management system. Your application is Accepted</h4>'
//         };
//         smtpTransport.sendMail(mailOptions, function(err) {
//             if(err){
//                 // console.log(err);
//                 res.status(401).send( "We seem to be experiencing issues. Please try again later.");
//                 // res.redirect("/");
//             }else{
//                 res.send()
//             console.log('mail sent to ' + mailList);
//             }
//         });
// });

});

// const course=req.body.course;
    
// const accept="accepted"
// formdata.find({course:course,status:accept}, function(err, allUsers){
//     if(err){
//         console.log(err);
//     }
//     var mailList = [];
//     allUsers.forEach(function(users){
//         mailList.push(users.email);
//         return mailList;
//     });
//     var smtpTransport = nodemailer.createTransport({
//         service: 'Gmail', 
//         auth: {
//             user: '',
//             pass: ""
//         }
//     });
//     var mailOptions = {
//             to: [],
//             bcc: mailList,
//             from: '',
//             subject: 'Form Accepted',
//             html: '<h1>Congratulations..! </h1> \n<h4> This mail is sent from the course management system. Your application is Accepted</h4>'
//         };
//         smtpTransport.sendMail(mailOptions, function(err) {
//             if(err){
//                 // console.log(err);
//                 res.status(401).send( "We seem to be experiencing issues. Please try again later.");
//                 // res.redirect("/");
//             }else{
//                 res.send()
//             console.log('mail sent to ' + mailList);
//             }
//         });
// });
module.exports = ProfessorRouter;