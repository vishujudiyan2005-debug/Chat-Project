import express, { Router } from 'express'
import router from './src/routes/user.route.js'
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials : true
    })
)


app.use(express.json()) //-------> frontend sends json request this middleware converts json to js so that the controller can read the request
app.use("/api/v1/user",router) //---> all the routes coming from router, the express add "/api/v1/user" in its prefix

export default app