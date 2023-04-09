const express = require("express");
const router = express.Router();
const Alien = require("../models/alien")
mongo = require('mongodb')

router.get('/',async(req,res)=>{

try{
   const aliens = await Alien.find();
   res.json(aliens);
}
catch(err){
res.send("Error:"+ err)
}
})

router.get('/:id',async(req,res)=>{
    
    try{
       const alien = await Alien.findById(req.params.id);
       res.json(alien);
    }
    catch(err){
    res.send("Error:"+ err)
    }
})
router.post('/',async(req,res)=>{
    const alien = new Alien({
        name: req.body.name,
        tech : req.body.tech,
        sub: req.body.sub
    })
    try{
   const a1 = await alien.save();
   res.json(a1);
    }


    catch(err){
    res.send("Error:"+err);
    }
})
router.patch('/:id',async(req,res)=>{
    try{
    const alien = await Alien.findById(req.params.id);
    if(alien != null){
        
        alien.name = req.body.name;
        alien.tech = req.body.tech;
        alien.sub = req.body.sub;
        const a1 = await alien.save();
        res.json(a1);
    }
    else{
        res.send("alien not found");
        }
        
    }


    catch(err){
    res.send("Error:"+err);
    }
})
router.delete('/:id',async(req,res)=>{
    try{
    const alien = await Alien.findById(req.params.id);
    
    if(alien != null){
        const delStudent = await  Alien.findByIdAndDelete(req.params.id);
        res.send(delStudent);
        
    }
    else{
        res.send("alien not found");
        }
        
    }


    catch(err){
    res.send("Error:"+err);
    }
})



module.exports = router;