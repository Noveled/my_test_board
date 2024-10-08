const router = require("express").Router();
const { postBoard } = require("../controllers/postBd");


// 코스 생성 엔드포인트
router.post("/postBoard", postBoard);

module.exports = router;
