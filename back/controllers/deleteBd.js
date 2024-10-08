const database = require('../database/database')

exports.deleteBoard = async (req, res) => {
  const postId = req.params.postId;
  console.log(`deleteBoard - postId: ${postId}`);

  try {
    const result = await database.query(`DELETE FROM posts WHERE id = $1`, [postId]);
    // 삭제된 행의 개수 확인 (삭제 성공 여부 확인)
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json({ message: 'Post Deleted Successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Delete Post Failed: ' + error.message });
  }
}