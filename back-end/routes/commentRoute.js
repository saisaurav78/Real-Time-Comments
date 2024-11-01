import express from 'express';
import { getComment, postComment } from '../controllers/commentController.js'; 

const router = express.Router();


router.post('/', postComment);

router.get('/', getComment);

export default router;
