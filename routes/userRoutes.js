import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authUser, getUserProfile, registerUser } from "../controllers/userController.js";

const router = express.Router();

// Complainer Routes
router.route("/register").post(registerUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)

export default router;
