import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Todo from './models/Todo.js';


const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('"mongodb+srv://jagadeeshdende:nXtqmtE5l9M9s8s9@cluster0.tzk6i.mongodb.net/Connectify?retryWrites=true&w=majority&appName=Cluster0"', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Connection error', err);
});



app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.post('/todos', async (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


app.delete('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


