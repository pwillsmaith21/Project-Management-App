//CRUD Functions for the project collection
const asyncHandler = require('express-async-handler')

const Project = require('../models/projectsModel')

// Get Request - /api/projects/:managerID
const getProjects = asyncHandler( async (req, res) => {
    const projects = await Project.find({manager: req.params.managerID})
    res.status(200).json(projects)
})

// Post Request - /api/projects/:managerID
const setProject = asyncHandler (async (req, res) => {

    if(!req.body.name){
        res.status(400)
        throw new Error('Please add name field')
    }

    const project = await Project.create({
        name: req.body.name,
        teamSize: req.body.teamSize,
        budget: req.body.budget,
        workload: req.body.workload,
        completionTime: req.body.completionTime,
        manager: req.params.managerID
    })
    res.status(201).json(project)
})

// Put Request - /api/projects/:id
const editProject = asyncHandler (async (req, res) => {
    const project = await Project.findById(req.params.id)

    if(!project){
        res.status(400)
        throw new Error('Project not found')
    }

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedProject)
})

// delete Request - /api/projects/:id
const deleteProject =  asyncHandler (async (req, res) => {
    const project = await Project.findById(req.params.id)

    if(!project){
        res.status(400)
        throw new Error('Project not found')
    }
    console.log(project)
    await Project.findByIdAndDelete(req.params.id)
    res.status(200).json({id: req.params.id})
})
 

module.exports = {
    getProjects,
    setProject,
    editProject,
    deleteProject
}