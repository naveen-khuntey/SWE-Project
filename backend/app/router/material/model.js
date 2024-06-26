const mongoose = require('mongoose');
const {Schema} = mongoose;

const MaterialSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    quantity: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Material', MaterialSchema)