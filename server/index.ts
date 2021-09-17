import express from 'express';
import path from 'path';
import router from './routes';
import createLogger from '../logger';

const logger = createLogger(__filename);
logger.info("We did it!")
const port = process.env.PORT || 8080;

const app = express();

const reactBuildPath = path.join(path.dirname(__dirname), 'client', 'build');
const reactIndexPath = path.join(reactBuildPath, 'index.html');

app.use(express.static(reactBuildPath));

app.get('/', (req, res) => res.sendFile(reactIndexPath));
app.get('/api', router);

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
