import express from "express"
import {
  createProduct,
  readProduct,
  deleteProduct,
  updateProduct,
  readSingleProduct,
} from "../controller/productController.js"
const router = express.Router()
router.route("/create").post(createProduct)
router.route("/").get(readProduct)
router
  .route("/:id")
  .delete(deleteProduct)
  .put(updateProduct)
  .get(readSingleProduct)

export default router
