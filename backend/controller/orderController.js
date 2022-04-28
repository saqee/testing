import expressAsyncHandler from "express-async-handler"
import Order from "../models/OrderModel.js"
export const orderCreate = expressAsyncHandler(async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      payment,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body
    const order = new Order({
      orderItems,
      shippingAddress,
      payment,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })
    if (order) {
      await order.save()
      res.status(201).json(order)
    }
  } catch (error) {
    res.status(401).json({
      message: "order not complete",
    })
  }
})

export const orderRead = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    if (order) {
      res.status(200).json(order)
    }
  } catch (error) {
    res.status(401).json({
      message: "order not complete",
    })
  }
})
