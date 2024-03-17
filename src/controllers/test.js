const router = require("express").Router();
const Test = require("../core/test");
const authenticate = require("../middlewares/auth");
const { uploadSingleFile } = require("../constant/multer");

const test = Test.getInstance()

router.get("/", (req, res) => {
    return res.send(test.testFn({ ...req.query, ...req.params }));;
});

router.post("/", /* uploadSingleFile.single('file'), */ (req, res) => {
    // console.log(req.file)
    return res.send(test.testFn({ ...req.body }));;
});

router.put("/", authenticate, (req, res) => {
    return res.send(test.testFn({ ...req.body }));;
});

router.delete("/", authenticate, (req, res) => {
    return res.send(test.testFn({ ...req.query, ...req.params }));;
});

module.exports = router;