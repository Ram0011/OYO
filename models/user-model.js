import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });

let User;
try {
    User = mongoose.model("User");
} catch (error) {
    User = mongoose.model("User", UserSchema);
}

export default User;