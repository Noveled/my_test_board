const router = require("express").Router();
const { deleteBoard } = require("../controllers/deleteBd");


// 코스 생성 엔드포인트
router.delete("/deleteBoard/:postId", deleteBoard);

module.exports = router;
