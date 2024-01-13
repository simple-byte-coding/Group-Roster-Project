import express from 'express';
import { helloWorldController } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', helloWorldController);

export default router;