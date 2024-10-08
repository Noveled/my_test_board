const database = require('../database/database'); // database.js import 

exports.getUsers = async(req, res) => {
  try {
    const result = await database.query('SELECT * FROM users');
    return res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

};
