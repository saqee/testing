import mongoose from "mongoose"
const { Schema } = mongoose

const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    brand: {
      type: String,
    },

    price: {
      type: Number,
    },
    inStock: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: { createdAt: "created_at" } }
)

const Product = mongoose.model("Product", productSchema)
export default Product
