const express=require('express');
const env=require('dotenv')
const app=express();
const mongoose=require('mongoose')
const bodyParser =require('body-parser')

//environment variable 
env.config()

// mongodb connection

const db=`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.csfkg.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(db).then(()=>{
    console.log(`connection succeful`)
}).catch((err)=>console.log(err))


// app.use(express.json())

app.use(bodyParser())


app.get('/',(req,res)=>{
    res.status(200).json({
        message:'Hello from the Server'
    })
})

app.post('/data',(req,res)=>{
    res.status(200).json({
        message:req.body
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT} `)
})