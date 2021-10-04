const express = require('express');
const loginRouter = express.Router(); 
const Bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const Studentdata= require('../model/Studentdata');
const Professordata= require('../model/Professordata');


loginRouter.post('/professor',(req,res)=>{

  var email = req.body.professor.email;

  Professordata.findOne({email:email},function(err,user) {          
    if(err) throw new Error(err);
           
    if(!user) { 
      res.status(401).send('User not registered.Please sign up');
    }
    if(user){
      if(Bcrypt.compareSync(req.body.professor.password, user.confirmpass)){
        let id=user._id;
        let payload = {subject: user}
        let token = jwt.sign(payload, 'secretKey')

        res.status(200).send({token,id:id})
      }else{
            res.status(401).send('Invalid credentials');
             }
                 }

     });
})


loginRouter.post('/student',(req,res)=>{

  let email = req.body.student.email;

  Studentdata.findOne({email:email},function(err,Stddat){
    if(err) throw new Error(err);
    if(!Stddat) 
      { res.status(401).send('User not registered.Please sign up');}
       if(Stddat){
      if(Bcrypt.compareSync(req.body.student.password, Stddat.confirmpass))
           {
            let id=Stddat._id;
            let payload = {subject: req.body.email+req.body.password}
             let token = jwt.sign(payload, 'secretKey')

                 res.status(200).send({token,id:id})}
       else{
        res.status(401).send('Invalid credentials');
      }
   
      }
    })
})
module.exports = loginRouter;