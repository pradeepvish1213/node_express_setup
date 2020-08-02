const db = require('./../models');
const allUsersList = async function (req, res) {
    let message = '';
    try {
        message = 'Connection has been established successfully.'
        await db.Sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        message = 'Unable to connect to the database:'+ error;
        console.error('Unable to connect to the database:', error);
    }
    return res.json({status: 200, message: db});
}

module.exports = allUsersList;