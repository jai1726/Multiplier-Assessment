import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Todo from './models/Todo.js';


const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('MongoDb Link', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Connection error', err);
});





