import { Router } from "express";
import { fetchAllUsers } from "../controllers/user.controller.js";

const router: Router = Router();

router.get("/:id", fetchAllUsers);

export default router;
