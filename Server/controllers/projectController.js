const { error } = require("console")

// Get Request - /api/projects
const getProjects = (req, res) => {
    res.status(200).json({message: 'Get projects'})
}

// Post Request - /api/projects
const setProject = (req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('Please add name field')
    }
    res.status(200).json({message: 'Create project'})
}

// Put Request - /api/projects/:id
const editProject = (req, res) => {
    res.status(200).json({message: `Updated project ${req.params.id}`})
}

// delete Request - /api/projects/:id
const deleteProject = (req, res) => {
    res.status(200).json({message: `delete project ${req.params.id}`})
}
 

module.exports = {
    getProjects,
    setProject,
    editProject,
    deleteProject
}