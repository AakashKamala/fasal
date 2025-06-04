import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { Request, Response } from "express"
import {chat} from "./chatFasal"

dotenv.config()

const app=express()

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response)=>{
    res.json({"message": "alive"})
})

app.post("/chat", chat)

const PORT=process.env.PORT || 9003

app.listen(PORT, ()=>{
    console.log("server is listening on PORT: ", PORT)
})