const mongoose = require('mongoose')
const bcrpypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

// static signup method
userSchema.statics.signup = async function(email,password){
    const exisits = await this.findOne({email})

    if(!email || !password){
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)){
        throw Error('Email not valid')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong Enough')
    }

    if(exisits){
        throw Error('Email already in use')
    }

    const salt = await bcrpypt.genSalt(10)
    const hash = await bcrpypt.hash(password,salt)

    const user = await this.create({email,password:hash})

    return user
}

module.exports = mongoose.model('User',userSchema)