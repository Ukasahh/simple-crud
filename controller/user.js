const {User} = require('../models');

module.exports =  {
    index: async(req, res) => {
        try {
            const response = await User.findAll();
            res.status(200).json({
                status: true,
                message: 'success get all users!',
                data: response
            });

        } catch (error) {
            throw error;
        }
    },
}