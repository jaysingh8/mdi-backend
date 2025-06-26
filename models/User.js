const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        maxlength: [128, 'Password must be less than 128 characters'],
    },
    phone:{
        type :Number,
        required:true,
    }
})
module.exports = mongoose.model('User', userSchema)