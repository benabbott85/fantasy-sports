const mongoose = require ('mongoose')
const {Schema} = mongoose


const playerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    position:{
        type: String
    }
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player