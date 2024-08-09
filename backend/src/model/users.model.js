const { Schema, default: mongoose} = require('mongoose')

const userShema = new Schema({
    firstName: {
        type: String,
        require : true,
        unique : true,
    },

    lastName: {
        type: String,
        require: true,
    },
    
    email: {
        type: String,
    },

    phoneNumber: {
        type: String,
    },

    role : {type : String},

    adress: {
        type: String,
    },

    password : {type :String},

    createdAt: {
        type: Date,
        default: Date.now 
    },

})


module.exports = mongoose.model('User',userShema)
