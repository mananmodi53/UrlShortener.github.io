const { text } = require('express');
const mongoose=require('mongoose')
const shortId=require('shortid')
const { Schema } = mongoose;

const shortUrlSchema = new Schema({ 
    full:{
        type:String,
        required:true
    },
    short:{
        type:String,
        required:true,
        default:shortId.generate
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    },
    note:{
        type:text,
        required:true
    }
})
module.exports=mongoose.model('ShortUrl',shortUrlSchema)