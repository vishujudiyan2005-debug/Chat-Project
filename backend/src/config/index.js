import mongoose,{connect} from "mongoose"
import dns from "dns"
import { DB_NAME } from "./constants.js"


dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
])

const connectDB = async() =>{

  try {
      const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
      console.log(`Database is connected. Hosting on: ${connectInstance.connection.host}`)
  }
   catch (error) {
    console.log("Database connection failed", error)
    process.exit(1)
  }
}

export default connectDB