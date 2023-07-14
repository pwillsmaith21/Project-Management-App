//Routes for the project collection
const express = require('express')
const router = express.Router()

const{getTaskByProject, getTaskByUser, editTask, setTask, deleteTask} = require('../controllers/taskController')

router.route('/project/:id').get(getTaskByProject).post(setTask)
router.route('/user/:id').get(getTaskByUser)
router.route('/:id').put(editTask).delete(deleteTask)

module.exports = router