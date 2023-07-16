const mongoose = require('mongoose')

const CartShema = new mongoose.Schema({       
    email :{
        type: String,
        require: true,
      
    },
    phone:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true,      
    },  
    brand:{
        type:String,
        require: true,      
    },
    price:{
        type:String,
        require: true,       
    },
    img :{
        type:String,
        require: true,   
    },
    size:{
        type:String,
        require: true,   
    },
    quantity :{
        type:Number,
        require: true,   
    }
    
})

module.exports= mongoose.model('Cart',CartShema)
