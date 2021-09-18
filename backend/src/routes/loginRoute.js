const express = require('express');
const loginRouter = express.Router(); 
const jwt = require('jsonwebtoken');
const Studentdata= require('../model/Studentdata');
const Professordata= require('../model/Professordata');


loginRouter.post('/',(req,res)=>{
  let password = req.body.password;
  let email = req.body.email;

  Professordata.findOne({"email":email})
  .then(function(Userdat){
    if (  email === Userdat?.email && password === Userdat?.confirmpass ) {
         let id=Userdat._id;
        let payload = {subject: Userdat}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      } 
      else 
       {
        res.status(401).send('Invalid Password or Invalid Password')
      } 
})

})

module.exports = loginRouter;