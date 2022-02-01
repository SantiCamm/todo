import mongoose from "mongoose";
import Todo from "../models/Todo";
import { Request, Response, NextFunction } from 'express';

// @desc Get todos
// @route GET /todos
export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req;

  try {
    const todos = await Todo.find({ creator: userId });
    return res.status(200).json({ data: todos });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

// @desc Add a todo
// @route POST /todos
export const addTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { text, completed } = req.body;
  const { userId } = req;

  const newTodo = new Todo({
    creator: userId,
    text,
    completed
  });

  try {
    await newTodo.save();
    res.status(200).json({ data: newTodo });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

// @desc Delete a todo
// @route DELETE /todos/id
export const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  const todoId = req.params.id;
  const { userId } = req;

  try {
    await Todo.findByIdAndRemove(todoId);

    return res.status(200).json({ data: "Todo deleted succesfully" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
