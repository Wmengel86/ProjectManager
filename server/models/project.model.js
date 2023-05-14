const mongoose = require("mongoose"); 


const ProjectSchema = new mongoose.Schema({
    title:{
        type: String
    },

    price:{
        type: Number
    },

    description:{
        type: String
    }

    
}, {timestamps: true})


const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;