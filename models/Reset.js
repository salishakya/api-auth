const mongoose  = require('mongoose');

const ResetSchema = mongoose.Schema({
	email : String,
    forgotCode : String
})

const Reset = mongoose.model("Reset",ResetSchema)

module.exports = Reset;