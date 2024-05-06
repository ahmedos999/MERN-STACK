const mongoose = require('mongoose')
const bcrpypt = require('bcrypt')

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

    if(exisits){
        throw Error('Email already in use')
    }

    const salt = await bcrpypt.genSalt(10)
    const hash = await bcrpypt.hash(password,salt)

    const user = await this.create({email,password:hash})

    return user
}

module.exports = mongoose.model('User',userSchema)