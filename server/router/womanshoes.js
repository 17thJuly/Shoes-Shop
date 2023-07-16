const Shoes = require("../model/WomanShoes");
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const path =require('path')
const fs = require('fs');
const { equal, notEqual } = require("assert");
const link = 'https://www.mytheresa.com/int_en/shoes.html?dir=desc&order=price&p=';
 // set the shoes Amount is limit 
 const limitAmount = 25;
 const total_product = 60;

 async function addShoes({title,limit_num,brand,price,img,img2}){
    if(await Shoes.findOne({title})){
         return await Shoes.updateOne({title, limitAmount,brand,price,img,img2},{ unique:true,})
    }    
    else {  
        return await Shoes.insertMany({title, limitAmount,brand,price,img,img2},{ unique:true,});     
    }  
};
  function douwnloadImg(Imgurl,name){
    const urls='http:'+ Imgurl
      fetch(urls).then(res =>
		res.body.pipe(fs.createWriteStream('/webproject/shoes/static/women/'+ name + path.basename(urls)))
	)  
  }
const  getCrawlwer = async () => {
  for(let i=1;i<21;i++){
      const URL=link+i
      console.log(i)
    const response = await fetch(URL);
    const body = await response.text();
    const $ = cheerio.load(body);
    $('.category-products').find('.item').each((i,el)=>{
        var  title = $(el).find('.product-name').find('a').text().trimStart();
        var brand = $(el).find('.product-info').find('.product-designer').text().trimStart().trimEnd();
        var price = $(el).find('.price-container').find('.price-box').text().trimStart().trimEnd();
        let url1= $(el).find('.product-image').find('img').attr('data-src')
        let url2 = $(el).find('.product-image').find('img').attr('data-rollover') 
        douwnloadImg(url1,title);
        douwnloadImg(url2,title);
       const img =  title+path.basename(url1)
       const img2 = title+path.basename(url2)
         addShoes({title,limitAmount,brand,price,img,img2})     
    });


  }
};
//getCrawlwer()
router.get('/women/list', async(req,res)=>{
    const items = await Shoes.find();
    return res.send({items});

})

router.get('/women/:slug', async(req,res)=>{
  const { slug } = req.params || {}
  const product = await Shoes.find();
  const items =[]
  let start_Index = (slug-1)*total_product 
  let end_Index = total_product*slug
  let i=0
   do{
    items[i] = product[start_Index]
    i++
    start_Index++
   }while(start_Index<end_Index && product[start_Index]!=null)
   console.log(items.length)
  return res.send({items});
  
})



module.exports = router