const router = require("express").Router();
const { test } = require("../controllers");

router.use("/test", test);

module.exports = router;