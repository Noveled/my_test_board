const database = require("../database/database");

// 포스트 생성
exports.postBoard = async (req, res) => {
  const { title, content, user_id } = req.body;
  console.log(`postBd - title: ${title}, user_id: ${user_id}, content: ${content}`);

  // DB 쿼리 전송
  try {
    await database.query('INSERT INTO posts (title, content, user_id) VALUES($1, $2, $3)', [title,  content, user_id]);

    return res.status(201).json({ message: 'New Board Created Successfully'});
  } catch (error) {
    return res.status(500).json({ message: 'Post Board Failed: ' + error.message });
  }

};

