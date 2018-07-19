const mongoose = require('./dbConnect');

const Schema = mongoose.Schema;


// users schema
const UserSchema = new Schema({
    token: Boolean,
    email: String,
    pass: String
});
// user model
const UserModel = mongoose.model('Users', UserSchema);



// exported models
const models = {
    UserModel
}

module.exports = models;