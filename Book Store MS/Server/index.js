import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import { AdminRouter } from './routes/auth.js'
import { StudentRouter } from './routes/student.js'
import { BookRouter } from './routes/book.js'
import { Student } from './models/Student.js'
import { Admin } from './models/Admin.js'
import { Book } from './models/Book.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
})
)
app.use(cookieParser())
dotenv.config()
app.use('/auth', AdminRouter)
app.use('/student', StudentRouter)
app.use('/book', BookRouter)

app.get('/dashboard', async (req, res, next) => {
    try{
        const student = await Student.countDocuments()
        const admin = await Admin.countDocuments()
        const book = await Book.countDocuments()
        return res.json({ok: true, student, admin, book})
    }catch(err){
        next(err);
    }
})

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Global Error Handler:", err);
    res.status(500).json({ success: false, message: "Internal Server Error", error: err.message || err });
});

app.listen(process.env.PORT, () => {
    console.log("Server is Running");
})