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

  getTodoById: async (req, res) => {
    const { id } = req.params;

    try {
      const todo = await Todo.findById(id);

      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      res.status(200).json({ todo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching todo" });
    }
  },

  updateTodoById: async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { text },
        { new: true }
      );

      if (!updatedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      res
        .status(200)
        .json({ message: "Todo updated successfully", todo: updatedTodo });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating todo" });
    }
  },

  deleteTodoById: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedTodo = await Todo.findByIdAndDelete(id);

      if (!deletedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting todo" });
    }
  },
};

module.exports = todoController;
