import express from "express";
import { getTodos, addTodo, deleteTodo } from "../controllers/todos";
import auth from "../middleware/auth"

const router = express.Router();
router
    .route("/")
    .get(auth, getTodos)
    .post(auth, addTodo)

router
    .route("/:id")
    .delete(auth, deleteTodo)

export default router;