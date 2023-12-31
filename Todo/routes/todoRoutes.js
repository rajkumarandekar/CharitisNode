const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");

router.get("/", todoController.getAllTodos);
router.post("/", todoController.createTodo);
router.get("/:id", todoController.getTodoById);
router.put("/:id", todoController.updateTodoById);
router.delete("/:id", todoController.deleteTodoById);
module.exports = router;
