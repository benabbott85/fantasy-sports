const mongoose = require ('mongoose')
const {Schema} = mongoose

const teamSchema = new Schema ({
    teamName: {
        type: String,
        required: true,
        trim: true
    },
    division:{
        type: String,
        required: true
    },
    conference:{
        type: String,
        required: true
    }
})

const Team = mongoose.model('Team', teamSchema)

module.exports = Team
