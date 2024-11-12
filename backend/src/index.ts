import express, { Request, Response } from 'express';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


interface Users{
  id: number,
  name: string
}

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send("hello");
});

app.get('/api/users', (req: Request, res: Response):any => {
  const users:Users[] = [
    { id: 1, name: "yuta" },
    { id: 2, name: "yuta2" }
  ];

  return res.status(200).json({ users });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;