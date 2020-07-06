const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');


//@route GET api/Items
// @desc get all items
//@access Public
router.get('/',(req,res)=>{
   Item.find()
        .sort({ date:-1 })
        .then(items => res.json(items)) 
});
//@route  POST api/Items
// @desc Create A item
//@access Public
router.post('/',(req,res)=>{
    const newItem= new Item({
        name : req.body.name
    });

    newItem.save().then(item = res.json(item));
 });
//@route  DELETE api/Items/:id
// @desc Delete A item
//@access Public
router
    .delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
        .then(item => item.remove().then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});
    

module.exports = router;
