const router = require("express").Router();
let {
  getExcercise,
  addExcercise,
  updateExcercise,
  deleteExcercise,
  getSingleExcercise
} = require("../controllers/excerciseController");

router.get("/", getExcercise);

router.post("/add", addExcercise);

router.post("/update/:id", updateExcercise);

router.delete("/delete/:id", deleteExcercise);

router.get("/singleExcercise/:id", getSingleExcercise);

module.exports = router;
