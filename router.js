const exp = require('express')
const path = require('path')
const router = exp.Router();
const bodyparser= require('body-parser')
const jsonParser = bodyparser.json()
const db = require('./database/databasequer.js');
const { resolve4 } = require('dns');
router.get("/",(req,res)=>{

    res.sendFile(path.resolve("home.html"))
})
router.post("/signup",jsonParser,async(req,res)=>{
    const response = await db.signInUsers(req.body).then((res1)=>{
        console.log(res1);
        res.json({"message":res1});
        
    })
    
})
router.post("/login",jsonParser,async(req,res)=>{
    console.log("Reached login")
   const resp =  await db.loginUser(req.body).then((e)=>{
    res.json({"message":e})
   })
   
})

router.post("/contactus",jsonParser,async(req,res)=>{
    const resp =  await db.comment(req.body).then((e)=>{
        res.json({"message":e})
       })
})




module.exports= router;
