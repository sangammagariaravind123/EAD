import express from 'express'
import mongoose from 'mongoose'
import router from './Routes/Controller.js'

const app = express()

mongoose.connect("mongodb://localhost:27017/backend").then(()=>{
    console.log("DB Connected");
}).catch((e)=>{
    console.log(e);
});



app.use(express.json())
app.use('/auth',router)

app.listen(9000, () =>
{
console.log('Server started')
});