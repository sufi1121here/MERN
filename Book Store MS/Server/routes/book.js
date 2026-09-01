import express from 'express'
import { Book } from '../models/Book.js'
const router = express.Router();
import { verifyAdmin } from '../middleware/authMiddleware.js';

router.post('/add', verifyAdmin, async (req, res, next) => {
    try{
        const {name, author, imageUrl} = req.body;
        const newBook = new Book({
            name,
            author,
            imageUrl
        })
        await newBook.save()
        return res.json({added: true})
    }
    catch(err){ 
        next(err);
    }
})

router.get('/books', async (req, res, next) => {
    try{
        const books = await Book.find()
        return res.json(books)
    }catch(err){
        next(err);
    }
})

router.get('/book/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const book = await Book.findById({_id: id})
        return res.json(book)
    }catch(err){
        next(err);
    }
})
router.put('/book/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const book = await Book.findByIdAndUpdate({_id: id}, req.body)
        return res.json({updated: true , book})
    }catch(err){
        next(err);
    }
})

router.delete('/book/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const book = await Book.findByIdAndDelete({_id: id})
        return res.json({deleted: true , book})
    }catch(err){
        next(err);
    }
})

export { router as BookRouter}