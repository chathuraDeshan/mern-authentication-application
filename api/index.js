import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './models/routes/user.route.js';
import authRoutes from './models/routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connect to the mongo db')
})
.catch((err) => {
    console.log(err)
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("server listeing on port 3000")
})

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)