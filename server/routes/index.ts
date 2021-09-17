import { Router } from 'express';
import createLogger from '../../logger';

const logger = createLogger(__filename);

const router = Router();

router.get('/', (request, response) => {
  logger.info("HelloWorld!");
  response.send('Hello world!');
});

export default router;
