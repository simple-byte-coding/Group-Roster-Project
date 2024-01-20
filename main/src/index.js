import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const __dirname = path.dirname(fileURLToPath(import.meta.url));


// user routes
app.use("/api/v1/user", userRoutes);

// static files
app.use(express.static("views"));

// html page
app.get("/", (req, res) => {
  res.sendFile("index.html");
})


app.get('/test-error', (req, res) => {
  throw new Error('Test error!');
});

// 404 error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
});


app.listen(3000, () => {
  console.log("Server running on port 3000...");
});