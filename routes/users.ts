import express from "express";
import { googleLogin } from "../controllers/users";

const router = express.Router();

router.post("/auth", googleLogin);

export default router;
