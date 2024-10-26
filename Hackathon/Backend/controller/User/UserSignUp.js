const userModel = require('./../../Models/User/userModel');
const bcrypt = require('bcrypt');

const userSignUpController = async (req, res) => {
    try {
        const { name, email, password, photo, teamName } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.send({
                success: false,
                message: 'User already exists'
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
            photo: photo,
            teamName: teamName
        })
        const result = await user.save();
        res.send({
            success: true,
            result
        });
    } catch (err) {
        res.send({
            success: false,
            message: err
        });
    }
}
module.exports = userSignUpController;
