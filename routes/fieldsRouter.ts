import express from "express";
const router = express.Router();

//전체 레벨대 사냥터 정리 API
router.get("/", (req:express.Request, res: express.Response)=>{
    
    res.send("하하! 사냥터는 성공이다!");
});

module.exports = router;
