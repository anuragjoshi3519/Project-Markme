const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'mark_me'
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
//--> to fetch batch taught by teacher -- show them `class id - subject_name - program` as options in dropdown menu
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
//--> to show student attendance
app.get('/checkattendanceteacher',(req,res)=>{
    const {username, class_id} = req.query
    const SELECT_QUERY = `SELECT student.reg_no as reg_no, first_name, last_name, sum(no_of_hours) as class_attended, number_of_classes from running_classes join student on running_classes.reg_no = student.reg_no join class on running_classes.class_id = class.class_id where class.teacher_id = '${username}' and class.class_id = '${class_id}' and entry='P' group by student.reg_no;`;
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



//--> markAttendance --> use getbatches first to select class_id to take attendance
//1. list of students to take attendance
app.get('/studentlistforattendance',(req,res)=>{
    const {class_id} = req.query
    const SELECT_QUERY = `select reg_no, first_name, last_name from student join batch_attends_class on student.batch_id = batch_attends_class.batch_id where class_id = ${class_id}`;
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
//2. for each table entry, if entry = 'A' (by default entry is 'P') then execute the following
app.get('/markattendance',(req,res)=>{
    const {reg_no, class_id, entry, no_of_hours} = req.query
    const SELECT_QUERY = `INSERT INTO attendance VALUES (NULL, '${reg_no}', '${class_id}', '${entry}', '${no_of_hours}');`;
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
//3. for updation of number_of_classes conducted  --- **QUERY IS CORRECT, FIGURE OUT HOW TO USE UPDATE QUERY IN NODE**
app.get('/updateclasses',(req,res)=>{
    const {class_id, no_of_hours} = req.query
    const SELECT_QUERY = `UPDATE class SET number_of_classes = (${no_of_hours} + number_of_classes) where class_id = ${class_id}`;
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





//-> to add a teacher
// 1. add user --> before this, check if the same username exists in the database, if yes then return error
app.get('/adduser',(req,res)=>{
    const {teacherID, password} = req.query
    const SELECT_QUERY = `INSERT INTO user VALUES ('${teacherID}', '${password}', 't');`;
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
// 2. add teacher --> before this, check if the same teacherID exists in the database, if yes then return error
app.get('/addteacher',(req,res)=>{
    const {teacherID, firstName, middleName, lastName, dob, gender, email, phone, joiningDate} = req.query
    const SELECT_QUERY = `INSERT INTO teacher VALUES ('${teacherID}', '${teacherID}', '${firstName}','${middleName}','${lastName}','${dob}','${gender}','${email}','${phone}',NULL,'${joiningDate}');`;
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





// -> to add a batch
app.get('/addbatch',(req,res)=>{
    const {batchID, program} = req.query
    const SELECT_QUERY = `INSERT INTO batch VALUES ('${batchID}', '${program}', '1');`;
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





// -> to add a student
//load batches to form
app.get('/loadbatch',(req,res)=>{
    const SELECT_QUERY = `SELECT batch_id from batch`;
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
//1. call '/adduser' first, and then do the next one
//2. addStudent -> before this, check if the same reg_no exists in the database, if yes then return error
app.get('/addstudent',(req,res)=>{
    const {regNo, firstName, middleName, lastName, dob, gender, email, phone, joiningDate, batchID} = req.query
    const SELECT_QUERY = `INSERT INTO student VALUES ('${regNo}', '${regNo}', '${firstName}','${middleName}','${lastName}','${dob}','${gender}','${email}','${phone}',NULL,'${joiningDate}','${batchID}');`;
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





// -> to add a class
//1. load teacherID in form
app.get('/loadteacher',(req,res)=>{
    const SELECT_QUERY = `SELECT teacher_id from teacher`;
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
//2. load batchID in form
app.get('/loadbatch',(req,res)=>{
    const SELECT_QUERY = `SELECT batch_id from batch`;
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

app.get('/loadclass',(req,res)=>{
    const SELECT_QUERY = `SELECT class_id from class`;
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

//3. add class --> check if same classID exists, if yes then return error
app.get('/addclass',(req,res)=>{
    const {classID, subjectName, teacherID, program, taughtInSem, conductionYear} = req.query
    const SELECT_QUERY = `INSERT INTO class VALUES ('${classID}', '${subjectName}', '${teacherID}','${program}','${taughtInSem}','${conductionYear}','0','1');`;
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
//4. add batch to class
app.get('/addbatchtoclass',(req,res)=>{
    const {classID, batchID} = req.query
    const SELECT_QUERY = `INSERT INTO batch_attends_class VALUES ('${classID}','${batchID}');`;
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




// --> to add new sem
app.get('/addnewsem',(req,res)=>{
    const {classID, batchID} = req.query
    const SELECT_QUERY = `CALL add_sem();`;
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




app.listen(4000,()=>{
    console.log("I am Listening.")
})