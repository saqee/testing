import expressAsyncHandler from "express-async-handler"
import Users from "../models/userModel.js"
import { generate_token } from "../utils/generateToken.js"
export const register = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const findEmail = await Users.find({ email })
  if (findEmail) {
    res.json({
      message: "try different or unique email",
    })
  } else {
    const user = await Users.create({
      name,
      email,
      password,
    })
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generate_token(user._id),
    })
  }
})

export const login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await Users.findOne({ email })

  if (user) {
    const userPasswordMatch = await user.matchPassword(password)
    console.log(userPasswordMatch)
    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        message: "login",
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generate_token(user._id),
      })
    } else {
      res.status(400).json({ message: "user not found" })
    }
  } else {
    res.status(400).json({ message: "user not found" })
  }
})

export const singleUser = expressAsyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id)
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(400).json({
      message: "user not available",
    })
  }
})

export const updateUser = expressAsyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }
    const updateUser = await user.save()
    res.status(200).json(updateUser)
  } else {
    res.status(400).json({
      message: "user not updated",
    })
  }
})

export const deleteUser = expressAsyncHandler(async (req, res) => {
  const user = await Users.findByIdAndDelete(req.params.id)
  res.status(200).json({
    message: "user  deleted successfully",
  })
})

//admin
export const allUser = expressAsyncHandler(async (req, res) => {
  const user = await Users.find()
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(400).json({
      message: "user not available",
    })
  }
})

//admin update user role
export const adminUpdateRole = expressAsyncHandler(async (req, res) => {
  const userInfo = await Users.findById(req.params.id)
  console.log(req.user)
  if (userInfo) {
    userInfo.name = req.body.name || userInfo.name
    userInfo.email = req.body.email || userInfo.email
    userInfo.isAdmin = req.body.isAdmin
    const updatedUser = await userInfo.save()
    res.status(200).json(updatedUser)
  } else {
    res.status(400).json({
      message: "user not updated",
    })
  }
})
