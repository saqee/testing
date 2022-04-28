import jwt from "jsonwebtoken"
function generate_token(id) {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "30d",
  })
}

export { generate_token }
