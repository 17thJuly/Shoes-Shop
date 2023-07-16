const app = require('express')
const router= app.Router()
const Cart = require('../model/cart')
const User = require('../model/user')
// set quantity size
const quantity = 1
const size = ''
router.post('/add',async(req,res)=>{
    const {email,phone} = req.session.user||{}
    let {title,brand,price,img}= req.body
    if(!req.session.user && !req.session.user.username){
        return res.status(400).send({message: 'not login'});
    }
    else{
        await Cart.create({email,phone,title,brand,price,img,size,quantity})
        return res.status(200).send({message:'successfully'});
    }
})

 router.get('/list', async(req,res)=>{
    const { email } = req.session.user || {}
    if(!email){
        return res.status(400).send({message: 'not login'});
    }
    else{
        const Items = await Cart.find({email})
        return  res.status(200).send({Items})  
    }    
 })

 
 router.delete('/del/:ItemId', async (req, res) => {
    const { ItemId } = req.params || {}
    console.log(ItemId)
    await Cart.findByIdAndDelete(ItemId)
    return  res.send({ message: 'deleted'})
  })
 router.patch('/update',async(req,res)=>{
    const {email} = req.session.user||{}
    const {img,quantity,select} = req.body
    const cart=  await Cart.find({email,img})
    console.log(email)
    for(let i=0; i < cart.length;i++){
        console.log(i)
        cart[i].quantity = quantity[i]
        cart[i].size = select[i].size
        cart[i].save()
    }
        
        return res.send({ message: 'Updated' } )
    
 })
 

module.exports=router