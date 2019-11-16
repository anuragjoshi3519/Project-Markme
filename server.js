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
    const SELECT_QUERY = 'SELECT * FROM user';
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

app.listen(4000,()=>{
    console.log("I am Listening.")
})