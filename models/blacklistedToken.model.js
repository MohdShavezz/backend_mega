import mongoose from "mongoose";

const blacklistedToken = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '1d', // Automatically delete after 1 day (adjust as needed)
  },
});

export const BlacklistedToken = mongoose.model('BlacklistedToken', blacklistedToken);
