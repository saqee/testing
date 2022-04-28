import expressAsyncHandler from "express-async-handler"
import Product from "../models/productModel.js"
export const createProduct = expressAsyncHandler(async (req, res) => {
  const { name, description, price, inStock, category, brand, image } = req.body
  const product = await Product.create({
    name,
    description,
    price,
    inStock,
    category,
    brand,
    image,
  })
  res.status(201).json(product)
})

export const readProduct = expressAsyncHandler(async (req, res) => {
  const product = await Product.find()
  if (!product) {
    res.status(400).json({ message: "no product" })
  } else {
    res.status(200).json(product)
  }
})
export const readSingleProduct = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    res.status(400).json({ message: "no product" })
  } else {
    res.status(200).json(product)
  }
})

export const deleteProduct = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  product.remove()
  res.status(200).json({
    message: "product deleted",
  })
})

export const updateProduct = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    product.name = req.body.name || product.name
    product.description = req.body.description || product.description
    product.price = req.body.price || product.price
    product.inStock = req.body.inStock || product.inStock
    const updatedProduct = await product.save()
    res.status(201).json(updatedProduct)
  } else {
    res.status(400).json({
      message: "product not updated",
    })
  }
})
