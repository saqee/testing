import express from "express"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import dotenv from "dotenv"
import db_start from "./config/db.js"
import path from "path"
dotenv.config()
const app = express()
app.use(express.json())
db_start()
app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/upload/", uploadRoutes)

const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))
app.listen(process.env.PORT, (req, res) => {
  console.log("server running")
})
