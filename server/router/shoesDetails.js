const shoesDetail = require("../model/shoesDetail");
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const path =require('path')
const fs = require('fs');
const { equal, notEqual } = require("assert");

const url = 'https://www.mytheresa.com/int_en/men/shoes.html?dir=desc&order=price&p=';
 async function addDetail(id,title, detail,links,links1,links2,links3,links4,links5,links6){
       let img = ''
       let img1 =''
       let img2=''
       let img3=''
       let img4=''
       let img5=''
       let img6=''
       if( links !== undefined)
            img = title+ path.basename(links)
        if( links1 !== undefined)
            img1 = title+ path.basename(links1)
        if(links2 !== undefined)
            img2 = title+path.basename(links2)
        if(links3 !== undefined)
            img3= title+ path.basename(links3)
        if(links4 !== undefined)
            img4 = title+ path.basename(links4)
        if(links5 !== undefined)
            img5=title+ path.basename(links5)
        if(links6!== undefined)
            img6= title+ path.basename(links6)
    if(await shoesDetail.findOne({id})){
         return await shoesDetail.updateOne({id,title, detail,img,img1,img2,img3,img4,img5,img6},{ unique:true,})
    }    
    else {  
        return await shoesDetail.insertMany({id,title, detail,img,img1,img2,img3,img4,img5,img6},{ unique:true,});     
    }  
};
  function douwnloadImg(Imgurl,name){
    if(Imgurl === undefined){
        return null
    }
    else{
      const urls='http:'+ Imgurl 
      const paths =  path.basename(urls)
      fetch(urls).then(res =>
      res.body.pipe(fs.createWriteStream('/webproject/shoes/static/details/men/'+ name +paths))
    )
    }
  
  }
  const  getCrawl = async (link,ids) => {
    const response = await fetch(link);
    const body = await response.text(); 
    const $ = cheerio.load(body);
const title = $('.product-name').find('.pb2').text()
let id = ids.concat('-',title.split(' ').join('-'))
const p = $('.product-shop').find('.disc').text()
const detail=p.split('').join('')
const links = $('.product-view').find('#image-0').attr('data-src')
douwnloadImg(links,title)
const links1 = $('.product-view').find('#image-1').attr('data-src')
douwnloadImg(links1,title)
const links2 = $('.product-view').find('#image-2').attr('data-src')
douwnloadImg(links2,title)
const links3 = $('.product-view').find('#image-3').attr('data-src')
douwnloadImg(links3,title)
const links4 = $('.product-view').find('#image-4').attr('data-src')
douwnloadImg(links4,title)
const links5 = $('.product-view').find('#image-5').attr('data-src')
douwnloadImg(links5,title)
const links6 = $('.product-view').find('#image-6').attr('data-src')
douwnloadImg(links6,title)
//addDetail(id,title, detail,links,links1,links2,links3,links4,links5,links6)

}

const  getLink = async () => {
  for(let i=24;i<27;i++){
    console.log(i)
    const URL=url+i
    const response = await fetch(URL);
    const body = await response.text(); 
    const $ = cheerio.load(body);
    $('.category-products').find('.item').each((i,el)=>{
        let  link = $(el).find('a').attr('href');
        let ids = $(el).attr('data-product-id')
        getCrawl(link,ids)
    });
    
   
  }

};
//getLink()


router.get('/men/:id', async(req,res)=>{
  const {id} = req.params || {}
    const shoes = await shoesDetail.findOne({id})
    return res.send({shoes});

})


module.exports = router