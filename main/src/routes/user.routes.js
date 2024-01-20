import express from 'express';
import { helloWorldController, registerUserHandler } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', helloWorldController);
router.post('/register', registerUserHandler);

export default router;