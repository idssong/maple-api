import express from "express";
const router = express.Router();

//전체 직업 정리 API
router.get("/", (req:express.Request, res: express.Response)=>{
    console.log("하하! 직업소개는 성공이다!");
    res.send("하하! 직업소개는 성공이다!");
});

//요청한 특정 직업 반환
router.get("/:id", (req: express.Request, res: express.Response)=>{
    console.log(req.params.id);
    res.send("요청하신 정보를 찾을 수 없습니다.");
});

//요청한 특정 직업군 반환
router.get("/group/:group", (req: express.Request, res: express.Response)=>{
    console.log(req.params.group);
    res.send("해당 정보를 찾을 수 없습니다.");
});

//여러 개 표시 기능 - JS로 DOM에서 해결

module.exports = router;