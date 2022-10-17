import { Schema } from 'mongoose';
const mongoose= require('mongoose')
const NoteSchema = new Schema({
    title:{
        type: String,
        required:[true,"Please add a title !"],
        unique: true,
        trim: true,
        maxlength : [40,"Title can't be more than 40 characters"]
    },
    description:{
        type: String,
        required: true,
        maxlength : [200,"Description can't be more than 200 characters"]
    }
})
module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);