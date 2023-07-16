const mongoose = require('mongoose')
const ShoesDetailShema = new mongoose.Schema({       
    id :{
        type: String,
        require: true,
        sparse:true
      
    },
    title :{
        type: String,
        require: true
      
    },
    detail :{
        type:String,
        require: true,   
    }, 
    img :{
        type:String,
        require: true,      
    },
    img1 :{
        type:String,
        require: true,      
    },
    img2 :{
        type:String,
        require: true,   
    },
    img3 :{
        type:String,
        require: true,   
    },
    img4 :{
        type:String,
        require: true,   
    },
    img5 :{
        type:String,
        require: true,   
    },
    img6 :{
        type:String,
        require: true,   
    }
})

module.exports= mongoose.model('ShoesDetail',ShoesDetailShema)
