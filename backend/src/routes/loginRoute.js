const express = require('express');
const loginRouter = express.Router(); 
const jwt = require('jsonwebtoken');
const Studentdata= require('../model/Studentdata');
const Professordata= require('../model/Professordata');


loginRouter.post('/professor',(req,res)=>{
  let password = req.body.password;
  let email = req.body.email;
  let User=req.body;;
  Professordata.findOne({"email":email})
  .then(function(Userdat){
    if (  email === Userdat?.email && password === Userdat?.confirmpass ) {
         let id=Userdat._id;
        let payload = {subject: Userdat}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token,id:id})
      } 
      else 
       {
        res.status(401).send('Invalid Password or Invalid Password')
      } 
    })
})

loginRouter.post('/student',(req,res)=>{
  let password = req.body.password;
  let email = req.body.email;
  let User=req.body;;
  Studentdata.findOne({"email":email})
  .then(function(Userdat){
    if (  email === Userdat?.email && password === Userdat?.confirmpass ) {
         let id=Userdat._id;
        let payload = {subject: Userdat}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token,id:id})
      } 
      else 
       {
        res.status(401).send('Invalid Password or Invalid Password')
      } 
    })
})
module.exports = loginRouter;