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
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);