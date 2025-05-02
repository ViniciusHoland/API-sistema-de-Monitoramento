import mongoose from "mongoose";

const queueSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quantityAtendimentos: {
        type: Number,
        default: 0
    },
    enteredAt: {
        type: Date,
        default: Date.now
    }
})

const QueueModel = mongoose.model('Queue', queueSchema)

export default QueueModel