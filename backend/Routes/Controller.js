import express from 'express'
import User from '../models/Model.js'
const router = express.Router()


router.get('/',async(req,res)=>{
    try{
        const alien = await User.find()
        res.json(alien)
    }
    catch(e){
        console.log(e);
    }

})


router.post('/',async(req,res)=>{
    
    try{
        const {firstname,lastname,tech,sub,email}=req.body
        const U_1 = await new User ({firstname,lastname,tech,sub,email}).save();

        res.json(U_1)

    }catch(e){
        console.log(e);
    }
    
})

router.patch('/:id',async(req,res)=>{
    try{
        const U_2 = await User.findById(req.params.id)

        U_2.sub=req.body.sub
        const a1 = await U_2.save()
        res.json(a1)
    }catch(e){
        console.log(e)
    }
})


export default router;