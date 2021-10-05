import { Router } from 'express';
import passport from 'passport';
import callbackRouter from './callback';

const router = Router();

router.get(
  '/',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.use('/callback', callbackRouter);

export default router;
