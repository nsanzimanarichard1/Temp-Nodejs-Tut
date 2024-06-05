const TaskModels = require('../models/Task'); // Correct path to models
const asyncWrapper = require('../middleware/async');
const { createCustomerError } = require('../errors/customer-errors');

const getAllTasks = asyncWrapper(async (req, res, next) => {
    const getTasks = await TaskModels.find({});
    res.status(200).json({ getTasks });
});

const createTask = asyncWrapper(async (req, res, next) => {
    const task = await TaskModels.create(req.body);
    res.status(201).json({ task });
});

const getSingleTasks = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params;
    const singleTask = await TaskModels.findOne({ _id: taskId });

    if (!singleTask) {
        return next(createCustomerError(`No task with that id : ${taskId}`, 404));
    }

    res.status(200).json({ singleTask });
});

const deleteTasks = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params;
    const taskToDelete = await TaskModels.findOneAndDelete({ _id: taskId });

    if (!taskToDelete) {
        return next(createCustomerError(`No task with that id : ${taskId}`, 404));
    }
    res.status(200).json(taskToDelete);
});

const updateTasks = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params;
    const updateValue = await TaskModels.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updateValue) {
        return next(createCustomerError(`No task with that id :  ${taskId}`, 404));
    }
    res.status(200).json(updateValue);
});

module.exports = {
    getAllTasks,
    createTask,
    getSingleTasks,
    updateTasks,
    deleteTasks
};
