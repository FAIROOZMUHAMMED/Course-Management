const express = require('express');
var cors = require('cors');
var app = new express();
app.use(cors());
app.use(express.json());




// const jobpostingRouter = require('./src/routes/jobpostingRoute');
const loginRouter = require('./src/routes/loginRoute');
const ProfessorRouter = require('./src/routes/professorRoute');
const StudentRouter = require('./src/routes/studentRoute');


app.use(express.urlencoded({extended:true}));
app.use('/login',loginRouter);
app.use('/professor',ProfessorRouter);
app.use('/student',StudentRouter);



app.listen(3400,()=>{
    console.log("Server Ready at : 3400");
});