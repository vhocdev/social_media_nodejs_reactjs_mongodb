const { User } = require("../models/users/user");

const authController = { 

    register: async (req, res) => {
        try {
            const { name, email, password } = req.body.user;
            const user = new User({ name, email, password });
            await user.save();
            res.status(201).json({ message: 'User registered successfully', user: user });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error ' + error });
        }
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body.user;
            const user = await User.findOne({ username, password });

            if (!user) {
                res.status(401).json({ error: 'Invalid credentials' });
                return;
            }

            const token = jwt.sign({ username }, 'solar');
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

}

module.exports = authController;