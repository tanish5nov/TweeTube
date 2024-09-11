import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true // FOR BETTER OPTIMISED SEARCHING
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, //CLOUDINARY SERVICE
        required: true,
    },
    coverImage: {
        type: String, //CLOUDINARY SERVICE
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "Password is required"] // [true, CUSTOM_ERROR_MESSAGE]
    },
    refershToken: {
        type: String,
    }
},
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", userSchema);