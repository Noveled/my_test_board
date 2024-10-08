const database = require('../database/database'); // database.js import 

// 전체 포스트
exports.getBoard = async(req, res) => {
  try {
    const result = await database.query('SELECT * FROM posts');
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ message: 'Get Board Failed: ' + error.message });

  }
};

// 포스트 상세보기
exports.getBoardDetail = async(req, res) => {
  const postId = req.params.postId;

  try {
    const result = await database.query('SELECT * FROM posts WHERE id = $1', [postId]);
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ message: 'Get Board Failed: ' + error.message });

  }
};