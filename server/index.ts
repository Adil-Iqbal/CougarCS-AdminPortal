import express from 'express'
import path from 'path'

const app = express();

app.use(express.static(path.join(path.dirname(__dirname), 'client', 'build')));

app.get('/ping', (req, res) => {
  return res.send('pong')
})

app.get('/', (req, res) => {
  const reactPath = path.join(path.dirname(__dirname), 'client', 'build', 'index.html');
  res.sendFile(reactPath);
})

app.listen(8080, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${8080}`);
});