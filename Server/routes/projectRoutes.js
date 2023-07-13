const express = require('express')
const router = express.Router()

const{getProjects, editProject, setProject, deleteProject} = require('../controllers/projectController')

router.route('/').get(getProjects).post(setProject)

router.route('/:id').put(editProject).delete(deleteProject)

module.exports = router