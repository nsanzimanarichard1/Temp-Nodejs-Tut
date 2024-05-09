const TaskModels = require('../models/Task')



const getAllTasks = async (req, res) => {
    try {
        const getTasks = await TaskModels.find({})
        res.status(200).json({getTasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    // res.send('get all task')
}

const createTask= async(req, res) => {

    try {
        const Task = await TaskModels.create(req.body)
        res.status(201).json({Task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}
const getSingleTasks = async (req, res) => {

    try {
        const {id: taskId} = req.params
        const singleTask = await TaskModels.findOne({_id: taskId});


        if(!singleTask){
            return res.status(404).json({msg:`no task with id ${taskId}`})
        }


        res.status(200).json({singleTask})

    } catch (error) {
        res.status(500).json({msg:error})
    }
    
} 
const deleteTasks = async (req, res) => {

    try {
        const{id: taskId} = req.params
        // if (!mongoose.Types.ObjectId.isValid(taskId)) {
        //     return res.status(400).json({ msg: 'Invalid task ID format' });
        // }
        const taskToDelete =  await TaskModels.findOneAndDelete({_id:taskId});

        if (!taskToDelete) {
            return res.status(500).json({msg:`there is no task wih id ${taskId}`})
    }
    res.status(200).json(taskToDelete)
    } catch (error) {
        return res.status(404).json({msg:error})
    }
    
}

const updateTasks = async (req, res) => {

    try {
        const{id: taskId} = req.params
        const updataValue = await TaskModels.findOneAndUpdate({_id:taskId}, req.body,{
            new:true,
            runValidators:true
        });
        if(!updataValue){
            return res.status(500).json({msg: `there is no task wih id ${taskId} `})
        }
        res.status(200).json(updataValue)
    } catch (error) {
        return res.status(404).json({msg:error})
    }
    
}


module.exports = {
    getAllTasks, createTask, getSingleTasks,updateTasks, deleteTasks
}