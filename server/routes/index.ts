import { Router } from 'express';
import apiRouter from './auth';
import APIError from '../error/api-error';

const router = Router();

router.get('/', (req, res, next) => {
  const err = APIError.badRequest('wrong!');
  next(err);
});

router.use('/auth', apiRouter);

export default router;
