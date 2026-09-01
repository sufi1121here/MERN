import express from 'express'
import { Student } from '../models/Student.js'
import bcrypt from 'bcrypt'
import { verifyAdmin } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/register', verifyAdmin, async (req, res, next) => {
    try{
        const {username, password, roll, grade} = req.body;
        const student = await Student.findOne({username})
        if(student){
            return res.json({message: "Student is already registered."})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newStudent = new Student({
            username,
            password: hashPassword,
            roll: roll,
            grade
        })
        await newStudent.save()
        return res.json({registered: true})
    }
    catch(err){ 
        next(err);
    }
})

export { router as StudentRouter}