import { Router } from 'express';
import APIError from '../../error/api-error';
import googleRouter from './google';

const router = Router();

router.get('/', (req, res, next) => next(APIError.forbidden()));

router.use('/google', googleRouter);

export default router;
