const ProjectModel = require('./../../Models/Project/ProjectMode');

const fetchProject = async (req, res) => {
    try {
        const project = await ProjectModel.find();
        res.status(200).json({
            success: true,
            project: project
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports = fetchProject;