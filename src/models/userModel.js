//mongoose helps communicate to our database
import mongoose from "mongoose";

//These are the models that would be created in our database
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "please provide an Email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    // if user is not verified, then we would send him/her a link to click and then gets verified
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})


// this export method checks if our user is already created, if not its create a new user.
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
