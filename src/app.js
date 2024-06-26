import express from 'express'
import userRouter from './routes/User.routes.js';
import './database.js'

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/v1/users", userRouter)
app.listen(port, () => {
    console.log("Conectado")
})