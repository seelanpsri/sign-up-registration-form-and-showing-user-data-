const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const path=require('path');
const primaryrt=require('./routs/primary')
const exhbs=require("express-handlebars")

app.engine('hbs',exhbs.engine({defaultLayout:false,extname:'hbs'}))
app.set('view engine','hbs')
app.set('views',"views");
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'img')))
app.use(primaryrt)

app.listen(3000,()=>{
    console.log("listening 3000 port")
})