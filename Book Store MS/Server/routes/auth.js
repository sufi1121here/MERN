import express from 'express';
import { login, verify, logout } from '../controllers/authController.js';
import { verifyUser } from '../middleware/authMiddleware.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 requests per 15 minutes
    message: { message: 'Too many login attempts from this IP, please try again after 15 minutes' }
});

router.post('/login', loginLimiter, login);
router.get('/verify', verifyUser, verify);
router.get('/logout', logout);

export { router as AdminRouter };