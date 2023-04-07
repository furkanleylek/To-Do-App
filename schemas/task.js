const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    id: {
        type: String
    },
    desc: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String
    },
    important: {
        type: Boolean
    },
    isUpdate: {
        type: Boolean
    },
    isCheck: {
        type: Boolean

    },

}, { timestamps: true });

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

module.exports = Task;