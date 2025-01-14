import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './models/routes/user.route.js';
import authRoutes from './models/routes/auth.route.js';
import path from  'path';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connect to the mongo db')
})
.catch((err) => {
    console.log(err)
});

const __dirname = path.resolve();
const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req,res) => {
    res.sendFile(path.json(__dirname, 'client', 'dist', 'index.html'))
});


app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
    console.log("server listeing on port 3000")
})

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)

app.use((err, req, res, next ) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success : false,
        message,
        statusCode,
    });
});