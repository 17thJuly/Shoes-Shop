const app = require('express')
const router= app.Router()
const Bill = require('../model/bills')
const User = require('../model/user')
router.post('/add',async(req,res)=>{
    const {email,phone} = req.session.user||{}
    let {fullname,adress,notes,total}= req.body
    if(!req.session.user && !req.session.user.username){
        return res.status(400).send({message: 'not login'});
    }
    else{
        await Bill.create({fullname,adress,phone,notes,total})
        return res.status(200).send({message:'successfully'});
    }
})
module.exports=router