const router = require("express").Router();
let { getUser, addUser } = require("../controllers/userController");
router.get("/", getUser);

router.post("/add", addUser);

module.exports = router;
