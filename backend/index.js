import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// /importing routes
import bookRoutes from './routes/book.routes.js';
import userRoutes from './routes/user.routes.js'

const env = dotenv.config().parsed;


const app = express()
const port = env.PORT || 3000
const MongoDB_URI = env.MongoDB_URI ;

app.use(cors());
app.use(express.json())
// connect to db
try {
    mongoose.connect(MongoDB_URI);
    console.log('MongoDB connected');
} catch (error) {
    console.log(console.error());
    
}

// defining routes
app.use('/books', bookRoutes);
app.use("/user", userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})