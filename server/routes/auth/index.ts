import { Router } from 'express';
import googleRouter from './google';
import forbiddenRoute from '../../controllers/util';

const router = Router();

router.get('/', forbiddenRoute);

router.use('/google', googleRouter);

export default router;
