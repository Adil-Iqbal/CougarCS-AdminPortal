import express from 'express';
import path from 'path';
import router from './routes';
import createLogger from '../logger';
import APIErrorHandler from './error/api-error-handler';

const logger = createLogger(__filename);
const port = process.env.PORT || 8080;

const app = express();

const reactBuildPath = path.join(path.dirname(__dirname), 'client', 'build');
const reactIndexPath = path.join(reactBuildPath, 'index.html');

app.use(express.static(reactBuildPath));
app.use('/', (req, res) => res.sendFile(reactIndexPath));
app.use('/api', router);
app.use(APIErrorHandler);

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
