var express = require("express");
var router = express.Router();
var tasksController = require("../controllers/tasks.controller");
var middleware = require("../middleware");

router.post("/", middleware.authenticate, tasksController.createTask);
router.get("/", middleware.authenticate, tasksController.getTasks);
router.get("/:id", middleware.authenticate, tasksController.getTask);
router.put("/:id", middleware.authenticate, tasksController.updateTask);
router.delete("/:id", middleware.authenticate, tasksController.deleteTask);

module.exports = router;
