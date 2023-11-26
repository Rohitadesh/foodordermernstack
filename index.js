const express=require('express')
const app=express()
const session=require('express-session')
const port =5000

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
const routers=require('./router/route')
const cors =require('cors')
app.use(express.json());
// const {int}=require('./models/models')
app.use(cors('*'))
app.use('/',routers)
app.listen(port,()=>{
    console.log("successfull")
})