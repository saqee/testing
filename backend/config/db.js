import mongoose from "mongoose"
async function db_start() {
  const db_connect = await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  if (db_connect) {
    console.log("db connect")
  } else {
  }
}
export default db_start
