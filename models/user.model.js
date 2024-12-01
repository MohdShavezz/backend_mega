import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Full name is required."],
    },
    email: {
        type: String,
        required: [true, "Email address is required."],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
