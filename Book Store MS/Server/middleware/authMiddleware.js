import jwt from 'jsonwebtoken';

export const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json({message:"Invalid Admin"})
    } else{
        jwt.verify(token, process.env.AdminKey, (err, decoded) => {
            if(err){
                return res.json({message: "Invalid token"})
            } else{
                req.username = decoded.username;
                req.role = decoded.role;
                next()
            }
        })
    }
}

export const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json({message:"Invalid User"})
    } else{
        jwt.verify(token, process.env.AdminKey, (err, decoded) => {
            if(err){
                jwt.verify(token, process.env.StudentKey, (err, decoded) => {
                    if(err){
                        return res.json({message: "Invalid token"})
                    } else{
                        req.username = decoded.username;
                        req.role = decoded.role;
                        next()
                    }
                })
            } else{
                req.username = decoded.username;
                req.role = decoded.role;
                next()
            }
        })
    }
}
