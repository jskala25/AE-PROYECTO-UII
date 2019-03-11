var mongoose=require('mongoose');

module.exports=new mongoose.Schema({
    nc:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    carrera:{
        type: String,
        required: true
    },
    semestre:{
        type: Number,
        required: true
    },
    sendmail: {
        type: Boolean,
        default: false
    }
});