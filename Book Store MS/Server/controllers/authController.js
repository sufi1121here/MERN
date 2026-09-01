import { Admin } from '../models/Admin.js'
import { Student } from '../models/Student.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

export const login = async (req, res, next) => {
    const {username, password, role} = req.body;
    try {
        if(role === 'admin'){
            const admin= await Admin.findOne({username})
            if(!admin){
                return res.json({message: "Admin not registered!"})
            }
            const validPassword = await bcrypt.compare(password, admin.password)
            if(!validPassword){
                return res.json({message: "Invalid password!"})
            }
            const token = jwt.sign({username: admin.username, role:'admin'}, process.env.AdminKey, { expiresIn: '1h' })
            res.cookie('token', token, {httpOnly: true, secure: true})
            return res.json({login:true, role:'admin'})
        } else if(role === 'student'){
            const student = await Student.findOne({username})
            if(!student){
                return res.json({message: "Student not registered!"})
            }
            const validPassword = await bcrypt.compare(password, student.password)
            if(!validPassword){
                return res.json({message: "Wrong password!"})
            }
            const token = jwt.sign({username: student.username, role:'student'}, process.env.StudentKey, { expiresIn: '1h' })
            res.cookie('token', token, {httpOnly: true, secure: true})
            return res.json({login:true, role:'student'})
        } else {
            return res.json({message: "Invalid role specified"})
        }
    } catch(err){ 
        next(err) 
    }
}

export const verify = (req, res) => {
    return res.json({login: true, role: req.role})
}

export const logout = (req, res) => {
    res.clearCookie('token')
    return res.json({logout: true})
}
