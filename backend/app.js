import express from 'express'
import mongoose from 'mongoose'
import router from './Routes/Controller.js'

const app = express()

mongoose.connect("mongodb://localhost:27020,localhost:27021,localhost:27022/cbit?replicaSet=m101",).then(()=>{
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