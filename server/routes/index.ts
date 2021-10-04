import { Router } from 'express';
import apiRouter from './auth';
import APIError from '../error/api-error';

const router = Router();

router.get('/', (req, res, next) => next(APIError.forbidden()));

router.use('/auth', apiRouter);

export default router;
