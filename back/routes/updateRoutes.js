const router = require('express').Router(); 
const { updateBoard } = require('../controllers/updateBd');

// patch 는 변경 사항에 대한 부분만 업데이트 한다.
// router.patch('/update_completed_task', updateBoard); 

// put 은 전체를 업데이트 한다.
router.patch('/updateBoard', updateBoard); 

module.exports = router; 