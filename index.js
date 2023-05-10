const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const router = require('./routes/todo');

const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  toggleTodo,
} = require('./controller/TodoController');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/api/todos', getTodos);
app.post('/api/todos', createTodo);
app.put('/api/todos/:id', updateTodo);
app.delete('/api/todos/:id', deleteTodo);
app.put('/api/todos/toggle/:id', toggleTodo);

app.listen(port, () => {
  console.log(
    `[server]: Server is running at http://localhost:${port}`
  );
});
