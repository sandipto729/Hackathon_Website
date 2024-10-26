const userModel = require('./../../Models/User/userModel');

const fetchuser = async (req, res) => {
    const UserId = req.user._id;
    try {
        const user = await userModel.findById(UserId);
        res.send({
            data: user,
            success: true
        });
    } catch (err) {
        res.send(err);
    }
}

module.exports = fetchuser;