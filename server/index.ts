import express from 'express';
import path from 'path';
import router from './routes';

const app = express();

const reactBuildPath = path.join(path.dirname(__dirname), 'client', 'build');
const reactIndexPath = path.join(reactBuildPath, 'index.html');

app.use(express.static(reactBuildPath));

app.get('/', (req, res) => res.sendFile(reactIndexPath));
app.get('/api', router);

app.listen(8080, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${8080}`);
});
