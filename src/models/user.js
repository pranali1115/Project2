const mongoose = require('mongoose')
const validator = require('validator')
const { default: isEmail } = require('validator/lib/isEmail')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require_tld: true,
        minlength: 3
    },
    email:{
            type:String,
            require_tld: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email id")
                }
            }
    },
    phone: {
        type: Number,
        require_tld: true,
        minlength: 10
    },
    message: {
        type: String,
        require_tld: true,
        minlength: 3
    },
    date:{
        type:Date,
        default:Date.now
    }

})

// We need to create collection:

const User = mongoose.model('User',userSchema)
module.exports = User