import express from "express";
import cors from "cors";
import { taskRouter } from './routes/taskRoutes.js'; // Import the taskRouter instance from the taskRoutes.js file, which contains the routing logic for task-related endpoints.

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//mounting the endpoints for the taskRouter
app.use('/api', taskRouter);

app.listen(PORT, () => {
  console.log('hello work from api endpoint')
  console.log(`Server is running on http://localhost:${PORT}`);
}); 