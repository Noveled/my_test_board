const database = require('../database/database');

exports.updateBoard = async (req, res) => {
  const { title, content, post_id } = req.body;
  const currentTime = new Date(); // 현재 날짜와 시간

  try {
    const result = await database.query(`UPDATE posts SET title = $1, content = $2, updated_at = $3 WHERE id = $4`, [title, content, currentTime, post_id]);
    return res.status(200).json({ message: 'Post Updated Successfully'});
  } catch (error) {
    return res.status(500).json({ message: 'Post Updated Fail' + error });
  }
}