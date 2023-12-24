import express from "express";
import {
  registerControllers,
  loginControllers,
  testControllers,
  forgotPasswordController,
} from "../controllers/AuthControllers.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
const router = express.Router();

// routing

// Register || Method <Post></Post>

router.post("/register", registerControllers);

router.post("/login", loginControllers);

// forget password

router.post("/forget-password", forgotPasswordController)

// test routes
router.get("/test", requireSignIn, isAdmin, testControllers);

// protected routes for users
router.get("/user-auth",requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected routes for admin
router.get("/admin-auth",requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
