const mongoose = require ('mongoose')

const {Schema}= mongoose
const bcyrpt= require ('bcrypt')


const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']

    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

userSchema.pre('save', async function (next){
    if(this.isNew || this.isModified('password')){
        const saltRounds = 10;
        this.password = await bcyrpt.hash(this.password, saltRounds)
    }
    next()
})

userSchema.methods.isCorrectPassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema)
module.exports = User