const UserModel = require('./../../Models/User/userModel');
const ProjectModel=require('./../../Models/Project/ProjectMode');

const userProjectSignUp = async (req, res) => {
    try {
        const UserID = req.user?._id; 
        const ProjectID = req.body?._id; 

        if (!UserID || !ProjectID) {
            return res.status(400).send({
                success: false,
                message: "User ID or Project ID is missing"
            });
        }

       
        const user = await UserModel.findById(UserID);
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }

        if (user.project) {
            const userProject=await ProjectModel.findById(user.project);
            return res.status(400).send({     
                success: false,
                message: `Already joined a project ${userProject.name}`
            });
        }

        user.project = ProjectID;
        await user.save();
        const project = await ProjectModel.findById(ProjectID);
        project.totalSignUp = project.totalSignUp + 1;
        await project.save();

        return res.status(200).send({
            success: true,
            message: "Successfully joined the project"
        });
    } catch (err) {
        console.error(err); 
        return res.status(500).send({
            success: false,
            message: "An error occurred while processing your request"
        });
    }
}

module.exports = userProjectSignUp;
