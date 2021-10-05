import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/', passport.authenticate('/', { failureRedirect: '/forbidden' }));

export default router;
