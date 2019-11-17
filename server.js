const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'MarkMe'
})

connection.connect((err)=>{
    if(err){
        return err
    }
})

const app = express()

app.use(cors())

app.get('/',(req,res)=>{
    res.send("MarkMe Server")
})


app.get('/users',(req,res)=>{
    const QUERY = 'SELECT * FROM user';
    connection.query(QUERY,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data : results
            })
        }
    })
})

app.get('/userprofile',(req,res)=>{
    const {username} = req.query
    const QUERY = `SELECT first_name, last_name, account_type, program, phone, email, date_of_birth, sem from student join user on student.username = user.username join batch on student.batch_id = batch.batch_id where reg_no = '${username}' ;`;
    connection.query(QUERY,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data : results
            })
        }
    })
})


app.get('/users/add',(req,res)=>{
    const {username,password} = req.query
    const QUERY = `INSERT INTO user (username,password,account_type) VALUES('${username}','${password}','s')`
    connection.query(QUERY,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.send('Successfully signed up')
        }
    })
})





//--this is for getting values for profile of account_type student
//add account type to studentprofile's req
app.get('/studentprofile',(req,res)=>{
    const {username} = req.query
    const SELECT_QUERY = `SELECT first_name, middle_name, last_name, account_type, program, phone, email, date_of_birth, sem from student join user on student.username = user.username join batch on student.batch_id = batch.batch_id where reg_no = '${username}'`;
    connection.query(SELECT_QUERY,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data : results
            })
        }
    })
})





//--this is for getting values for profile of account_type teacher
//add account type to teacherprofiledata's req
app.get('/teacherprofiledata',(req,res)=>{
    const {username} = req.query
    const SELECT_QUERY = `SELECT first_name, middle_name, last_name, account_type, phone, email, date_of_birth from teacher join user on teacher.username = user.username where teacher_id = '${username}'`;
    connection.query(SELECT_QUERY,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data : results
            })
        }
    })
})





//--this is for getting the names of subjects taught by a teacher --> to be rendered on teacher's profile
app.get('/teachersubjects',(req,res)=>{
    const {username} = req.query
    const SELECT_QUERY = `SELECT subject_name from class where teacher_id = '${username}' and status=1`;
    connection.query(SELECT_QUERY,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data : results
            })
        }
    })
})





//--this for previousattendance module of student --> needs username and sem to render the attendance details
app.get('/previousattendance',(req,res)=>{
    const {username,sem} = req.query
    const SELECT_QUERY = `SELECT subject_name, number_of_classes, percentage from attendance_percentage join class on attendance_percentage.class_id = class.class_id where reg_no = '${username}' and taught_in_semester = '${sem}'`;
    connection.query(SELECT_QUERY,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data : results
            })
        }
    })
})


//--this is for checkAttendance module for students --> needs username
app.get('/checkattendancestudent',(req,res)=>{
    const {username} = req.query
    const SELECT_QUERY = `SELECT subject_name, number_of_classes, sum(no_of_hours) as classes_attended from running_classes join class on running_classes.class_id = class.class_id where reg_no = '${username}' and entry = 'P' group by class.class_id;`;
    connection.query(SELECT_QUERY,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data : results
            })
        }
    })
})




//--this is for checkAttendance module for teacher --> needs username
//--> to fetch batch taught by teacher
app.get('/getbatches',(req,res)=>{
    const {username} = req.query
    const SELECT_QUERY = `SELECT class_id, subject_name, program from class where teacher_id = '${username}' and status = 1`;
    connection.query(SELECT_QUERY,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data : results
            })
        }
    })
})
/*--> to show student attendance
app.get('/checkattendanceteacher',(req,res)=>{
    const {username, class_id} = req.query
    const SELECT_QUERY = `SELECT `;
    connection.query(SELECT_QUERY,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data : results
            })
        }
    })
})

*/







app.listen(4000,()=>{
    console.log("I am Listening.")
})