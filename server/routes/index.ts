import { Router } from 'express';
import apiRouter from './auth';
import forbiddenRoute from '../controllers/util';

const router = Router();

router.get('/', forbiddenRoute);

router.use('/auth', apiRouter);

export default router;
