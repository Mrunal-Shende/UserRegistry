const User = require('../models/User');

// Add User
exports.addUser = async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            email: req.body.email,
            photo: req.file ? req.file.filename : ''
        });

        await newUser.save();
        res.status(200).send("User added!");
    } catch (error) {
        res.status(500).send("Something went Wrong!");
    }
};

// Get All Users
exports.getUsers = async (req, res) => {
    const data = await User.find();
    res.json(data);
};
