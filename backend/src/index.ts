import express, { Request, Response } from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser'
import dotenv from "dotenv";

dotenv.config();


interface Users{
  id: number,
  name: string
}

const app = express();
const port = process.env.PORT || 3001;



// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SIGN_KEY))

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send("hello");
});


// Routes
import userRouter from './routes/user.routes'
import menuRouter from './routes/menu.routes'
app.use('/api/users', userRouter)
app.use('/api/menus', menuRouter)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;