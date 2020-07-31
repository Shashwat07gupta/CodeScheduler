const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
   },
    date: {
        type: Date,
        default: Date.now
    },
    link:{
        type:String,
        required:true
    },
    remarks:{
        type:String,
        required:false
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);