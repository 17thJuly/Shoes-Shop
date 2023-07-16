const mongoose = require('mongoose')

const BillShema = new mongoose.Schema({ 
    fullname:{
        type:String,
        require:true,      
    },
    adress:{
        type:String,
        require: true,      
    },
    phone:{
        type:String,
        require:true
    },       
    notes:{
        type:String,
        require: true,   
    },
    total :{
        type:Number,
        require: true,   
    }
    
})

module.exports= mongoose.model('Bill',BillShema)
