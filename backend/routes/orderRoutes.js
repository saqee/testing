import express from "express"
import { orderCreate, orderRead } from "../controller/orderController.js"
const router = express.Router()
router.post("/create", orderCreate)
router.get("/:id", orderRead)

export default router
