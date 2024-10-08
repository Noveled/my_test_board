const router = require("express").Router();
const { getUsers } = require("../controllers/getUsers");
const { getBoard } = require("../controllers/getBd");
const { getBoardDetail } = require("../controllers/getBd");

// 코스 생성 엔드포인트
router.get("/getUsers", getUsers);
router.get("/getBoard", getBoard);
router.get("/getBoardDetail/:postId", getBoardDetail);



module.exports = router;
