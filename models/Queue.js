import mongoose from "mongoose";

const queueSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    enteredAt: {
        type: Date,
        default: Date.now
    }
})

const Queue = mongoose.model('Queue', queueSchema)

export default Queue