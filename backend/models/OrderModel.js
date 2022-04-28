import mongoose from "mongoose"

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String },
        qty: { type: Number },
        image: { type: String },
        price: { type: Number },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String },
      city: { type: String },
      postalCode: { type: String },
      country: { type: String },
    },
    paymentMethod: {
      type: String,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    itemsPrice: {
      type: Number,
    },
    taxPrice: {
      type: Number,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      default: 0.0,
    },
    totalPrice: {
      type: Number,

      default: 0.0,
    },
    isPaid: {
      type: Boolean,

      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,

      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model("Order", orderSchema)

export default Order
