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

  createTodo: async (req, res) => {
    const { text } = req.body;

    try {
      const newTodo = new Todo({ text });
      await newTodo.save();
      res
        .status(201)
        .json({ message: "Todo created successfully", todo: newTodo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating todo" });
    }
  },
};

module.exports = todoController;
