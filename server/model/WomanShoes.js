const mongoose = require('mongoose')
const ShoesShema = new mongoose.Schema({       
    title :{
        type: String,
        require: true,
        sparse:true
      
    },
    limitAmount:{
        type:Number,
        require:true
    },
    brand:{
        type:String,
        require:true,      
    },
    price:{
        type:String,
        require: true,       
    },  
    img :{
        type:String,
        require: true,      
    },
    img2 :{
        type:String,
        require: true,   
    }
})

module.exports= mongoose.model('WomenShoes',ShoesShema)
