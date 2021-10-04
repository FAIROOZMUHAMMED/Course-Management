const express = require('express');
const ProfessorRouter = express.Router(); 
const Bcrypt=require('bcryptjs');
const nodemailer=require('nodemailer');
const Professordata= require('../model/Professordata');
const Coursedata= require('../model/Coursedata');
const AppliedStddata= require('../model/Appliedstudentdata');


function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')     }
  req.userId = payload.subject
  next()}

ProfessorRouter.post('/signup',function(req,res){
  const hash = Bcrypt.hashSync(req.body.professor.confirmpass, 10);
  var Professor ={
      firstname : req.body.professor.firstname,
      lastname: req.body.professor.lastname,
      email:req.body.professor.email,
      confirmpass:hash,
  }
  var Professor =new Professordata(Professor);
  Professor.save();
});

ProfessorRouter.get('/:id',(req,res)=>{
  id=req.params.id;
  Professordata.findOne({"_id":id})
  .then(data=>{
      res.send(data)
  })
})

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

function checklimit(req,res,next){
  const course=req.body.course;
  AppliedStddata.count({"course":course,"status":"accepted"})
  .then(data=>{

      if(data<40){
          
          res.send();
          next();
      }else{
          res.status(401).send('sorry..over the limit')
      }
    
  })
  
}

ProfessorRouter.put('/acceptStudent',checklimit,function(req,res){
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


ProfessorRouter.post('/sendmail',function(req,res){
const course=req.body.course;

AppliedStddata.find({course:course,status:"accepted"}, function(error, Users){
  
    if(error){
        console.log(error);
    }
    var mailList = [];
    Users.forEach(function(users){
        mailList.push(users.email);
        return mailList;
    });
    var Transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'fairoozmt10@gmail.com',
          pass: "yqidjzjghrqyycfq"
      },tls: {
          rejectUnauthorized: false
      }
    });
    var mailOptions = {
            to: [],
            bcc: mailList,
            from: 'fairoozmt10@gmail.com',
            subject: 'Successfully Enrolled Course',
            html: `<h1>Congratulations..! </h1> \n<h4> This mail is sent from the course management system. Your application  is Accepted</h4>`
        };
        Transporter.sendMail(mailOptions, function(err) {
            if(err){
                res.status(401).send( "We seem to be experiencing issues. Please try again later.");
            }else{
                res.send()
            console.log('mail sent to ' + mailList);
            }
        });
  });
});

module.exports = ProfessorRouter;