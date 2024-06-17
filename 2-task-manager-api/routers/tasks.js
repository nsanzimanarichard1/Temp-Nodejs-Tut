const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTask,
    getSingleTasks,
    updateTasks,
    deleteTasks
} = require('../starter/controllers/task'); // Update path to point to correct controller file

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTasks).patch(updateTasks).delete(deleteTasks);

module.exports = router;

