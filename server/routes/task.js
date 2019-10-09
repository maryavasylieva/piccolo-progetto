const router = require("express").Router();
const { TaskController } = require("../controllers");

router.put("/:id", TaskController.deleteTask);

module.exports = router;
