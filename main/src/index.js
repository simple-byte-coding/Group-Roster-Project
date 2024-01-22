import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const dirname = path.dirname(fileURLToPath(import.meta.url));

// user routes
app.use('/api/v1/user', userRoutes);

// static files
app.use(express.static('views'));

// html page
app.get('/', (res) => {
  res.sendFile('index.html');
});

app.get('/test-error', (req, res) => {
  throw new Error('Test error!');
});

// 404 error handler
app.use((err, res) => {
  console.error(err.stack);
  res.status(404).sendFile(path.join(dirname, '..', 'views', '404.html'));
});

app.listen(3000, () => {
  console.log('Server running on port 3000...');
});
