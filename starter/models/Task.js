const mongoose = require('mongoose')

const TaskSchema =new mongoose.Schema({
    name:{
        type: String,
        require:[true, 'name must be entered'],
        maxlength:[20, 'name should not exceed 20 character'],
        trim: true,
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);