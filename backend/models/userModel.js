import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: "created_at" } }
)

userSchema.methods.matchPassword = async function (comparePassword) {
  return await bcrypt.compare(comparePassword, this.password)
}

userSchema.pre("save", async function (next) {
  var salt = await bcrypt.genSalt(10)
  var hash = await bcrypt.hash(this.password, salt)
  if (!this.isModified("password")) {
    next()
  } else {
    this.password = hash
  }
  next()
})

const User = mongoose.model("User", userSchema)
export default User
