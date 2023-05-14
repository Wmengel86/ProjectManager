const ProjectController = require("../controllers/project.controller.js"); 

module.exports = (app)=>{
    app.get("/api/projects", ProjectController.getAllProjects);

    app.get("/api/projects/:id", ProjectController.getOneProject);
    
    app.post("/api/project", ProjectController.createProject);

    app.put("/api/projects/:id", ProjectController.updateProject);

    app.delete("/api/projects/:id", ProjectController.deleteProject);
}