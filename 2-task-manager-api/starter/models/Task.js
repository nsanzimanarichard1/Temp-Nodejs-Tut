const mongoose = require('mongoose')

const TaskSchema =new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be provided'],
        trim: true,
        minlength: [1, 'Name must not be empty'],
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);