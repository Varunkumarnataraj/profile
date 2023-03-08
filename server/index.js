const express= require('express')
const app=express()
const mysql=require('mysql')


const db = mysql.CreatePool({
    host:'localhsot',
    user:'root',
    password:'Augusta@12',
    database:'joining',
})

app.get('/',(req,res)=>{

    
    res.send("Hello")
})

app.listen(3001,()=>{
    console.log("Running in port 3001");
})