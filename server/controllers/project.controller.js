const Project = require("../models/project.model.js"); 


module.exports = {
    createProject: (req, res) => { 
        Project.create(req.body) 
            .then((newProject) => res.json(newProject)) 
            .catch((err) => console.log(err));
    },

    getAllProjects: (req, res) => {
        Project.find({}) 
            .then((allProjects) => res.json(allProjects))
            .catch((err) => console.log(err));
    },

    getOneProject: (req, res) => {
        Project.findOne({ _id: req.params.id }) 
            .then((oneProject) => res.json(oneProject))
            .catch((err) => console.log(err));
    },

    updateProject: (req, res) => {
        Project.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true, 
            runValidators: true, 
        })
            .then((updatedProject) => res.json(updatedProject))
            .catch((err) => console.log(err));
    },

    deleteProject: (req, res) => {
        Project.deleteOne({ _id: req.params.id })
            .then((deletedId) => res.json(deletedId))
            .catch((err) => console.log(err));
    },
};