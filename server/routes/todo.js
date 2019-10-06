const router = require("express").Router();
const { TodoController } = require("../controllers");

router.get("/:id", TodoController.getByID);
router.get("/", TodoController.getAll);
router.post("/", TodoController.create);
router.delete("/:id", TodoController.delete);
router.put("/:id", TodoController.update);
router.patch("/:id", TodoController.patch);

module.exports = router;
