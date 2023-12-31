const Todo = require("../models/todoModel");

const todoController = {
  getAllTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.status(200).json({ todos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching todos" });
    }
  },
};

module.exports = todoController;
