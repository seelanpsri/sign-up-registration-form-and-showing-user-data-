const express=require('express');
const router=express.Router();
const path=require('path')
const dbs=require('../db/db')
const bodyparser=require('body-parser');

router.use(bodyparser.urlencoded())
router.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','index.html'))
})
router.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','about.html'))
})
router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','contact-me.html'))
})

router.get('/sign-up',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','sign-in.html'))
})
router.post('/registration-data',async (req,res)=>{
  let database=await dbs.getdatabase();
  let collection=await database.collection('userdata');
  let data={
    fullname:req.body.fullname,
    email:req.body.email,
username:req.body.username,
    password:req.body.password
  }
  await collection.insertOne(data)
  res.render(path.join(__dirname,"..",'views','login'))
})
router.post('/show-data',async (req,res)=>{
    let database=await dbs.getdatabase();
    let collection=await database.collection('userdata');
    let data=await collection.findOne({username:req.body.username});
    let username_error,password_error;
    if(data===null){
         username_error='User name not found..';
         res.render(path.join(__dirname,'..','views','login'),{username_error,password_error})
         console.log('1')
        
    }
    else if(req.body.password!=data.password){
            password_error='wrong paassword';
            res.render(path.join(__dirname,'..','views','login'),{username_error,password_error})
           
            
        }
    else{
         res.redirect(`/show/?id=${data._id}`)
        


        }
    


})
router.get('/show/',async (req,res)=>{
    let database=await dbs.getdatabase();
    let collection= database.collection('userdata');
    let data=await collection.findOne({_id:new dbs.objid(req.query.id)});
    console.log(data)
    let name=data.fullname;
    let email=data.email;
    let username=data.username;
    let password=data.password;
    console.log(name)
    res.status(200).render(path.join(__dirname,'../','views','result.hbs'),{name,email,username,password})
})

module.exports=router
