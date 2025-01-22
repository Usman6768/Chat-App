import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;
const databaseURL = process.env.DATABASE_URL;


app.use(cors({
    origin: process.env.ORIGIN,
    methods: ["GET","POST","PUT","PATCH","DELETE"],
    credentials: true,
}))

app.use(cookieParser()) // cookie parser is used to get cookies from frontend, it is a middle ware
app.use(express.json()) // to get body in json format , payload will be in json format


const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`); 
})

mongoose.connect(databaseURL).then(() => {
    console.log("DB connected successfully");
})