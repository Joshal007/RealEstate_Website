const mongoose = require("mongoose")

const UserSch = new mongoose.Schema({
    emailid: {
        type: String
    }
})

const User = mongoose.model("User", UserSch)
module.exports = User;