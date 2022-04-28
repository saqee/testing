import express from "express"
import {
  register,
  login,
  allUser,
  singleUser,
  updateUser,
  deleteUser,
  adminUpdateRole,
} from "../controller/userController.js"
import { protect, admin } from "../middleware/authMiddleware.js"
const router = express.Router()
router.post("/register", register)
router.post("/login", login)
router.get("/:id", protect, singleUser)
router.put("/:id", protect, updateUser)
router.delete("/:id", deleteUser)

router.get("/", protect, admin, allUser)
router.put("/admin/:id", protect, admin, adminUpdateRole)
export default router
