import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'
import cookieparser from "cookie-parser"
import connectDB from "./utils/db.js";
import AuthRoutes from "./routes/Auth.js";
import AdminRoutes from "./routes/Adminroutes.js";
dotenv.config()
const PORT = process.env.PORT
const app = express();

// MongoBD connect
connectDB()
app.use(cors())
app.use(express.json())
app.use(cookieparser())

app.use('/api/auth',AuthRoutes)
app.use('/api/admin',AdminRoutes)

app.get('/',(req,res)=>{
    res.send("Testing for get request")
})

app.listen(PORT,()=>{
    console.log("server is running");
})