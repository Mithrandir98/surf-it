const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  image: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);

/*
User
- email - string
- password - string
- username - string
- image - string
- posts - array of objects ref Post
*/
