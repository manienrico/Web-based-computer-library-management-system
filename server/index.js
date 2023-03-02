const express = require('express')
const app = express()
const mysql = require("mysql")
const cors = require('cors')
const { response } = require('express')

app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'WebComputerLab',
})

    //All Staff page roles
app.post('/create', (req,res)=>{
    // console.log(req.body)
    const name = req.body.name
    const address = req.body.address
    const age = req.body.age
    const computer = req.body.computer
    const purpose = req.body.purpose
    const duration = req.body.duration
    const payment = req.body.payment
    
    db.query('INSERT INTO Client (clientName,clientAddress,clientAge,computer,purpose,duration,payment) VALUES (?,?,?,?,?,?,?)',
    [name,address,age,computer,purpose,duration,payment],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send('Values inserted')
        }
        
    })
})

app.get('/client',(req,res)=>{
    db.query("SELECT * FROM Client",(err,result)=>{
        if (err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.put('/update', (req,res)=>{

    // console.log(body)

    const id = req.body.id
    const name = req.body.name
    const address = req.body.address
    const age = req.body.age
    const computer = req.body.computer
    const purpose = req.body.purpose
    const duration = req.body.duration
    const payment = req.body.payment
    
    db.query(`UPDATE Client SET clientName=?,clientAddress=?,clientAge=?,computer=?,purpose=?,duration=?,payment=? WHERE clientID ='${id}'`,
    [name,address,age,computer,purpose,duration,payment],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send('Update Successful')
        }
    })
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    const name = req.body.name
    const address = req.body.address
    const age = req.body.age
    const computer = req.body.computer
    const purpose = req.body.purpose
    const duration = req.body.duration
    const payment = req.body.payment

    db.query(`DELETE FROM Client WHERE clientID ='${id}'`,
    [name,address,age,computer,purpose,duration,payment],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send('Deleted Successfully')
        }
    })
})

    // All admin page roles
app.post('/createStaff',(req,res)=>{
    console.log(req.body)
    const name = req.body.name
    const nin = req.body.nin
    const address = req.body.address
    const age = req.body.age
    const gender = req.body.gender
    const wage = req.body.wage
    const responsibility = req.body.responsibility

    db.query('INSERT INTO Staff(staffName,staffNin,staffAddress,staffAge,staffGender,wage,workDays) VALUES (?,?,?,?,?,?,?)',
    [name,nin,address,age,gender,wage,responsibility],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send('Staff inserted.')
        }
    }
    )
})

app.get('/getStaff',(req,res)=>{
    db.query('SELECT * FROM Staff',(err,result)=>{
        if(err){
            console.log(err)
        }else{
            
            res.send(result)
        }
    })
})

app.put('/staffUpdate',(req,res)=>{
    const id = req.body.id
    const name = req.body.name
    const nin = req.body.nin
    const address = req.body.address
    const age = req.body.age
    const gender = req.body.gender
    const wage = req.body.wage
    const responsibility = req.body.responsibility

    db.query(`UPDATE Staff SET staffName=?,staffNin=?,staffAddress=?,staffAge=?,staffGender=?,wage=?,workDays=? WHERE staffID='${id}'`,
    [name,nin,address,age,gender,wage,responsibility],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send('Staff Update completed successfully.......')
        }
    })
})

app.delete('/deleteStaff/:id',(req,res)=>{
    const id = req.params.id
    const name = req.body.name
    const nin = req.body.nin
    const address = req.body.address
    const age = req.body.age
    const gender = req.body.gender
    const wage = req.body.wage
    const responsibility = req.body.responsibility

    db.query(`DELETE FROM Staff WHERE staffID ='${id}'`,
    [name,nin,address,age,gender,wage,responsibility],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send('Staff Deleted Successfully')
        }
    })
})










app.listen(3001,()=>{
    console.log('Yey, your server is running successfully.')
})