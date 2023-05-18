const mongoose = require('mongoose');

const doneTasksSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    doneTasks: {
        type: String
    }
}, { timestamps: true });

const DoneTasks = mongoose.models.DoneTasks || mongoose.model('DoneTasks', doneTasksSchema);

module.exports = DoneTasks;