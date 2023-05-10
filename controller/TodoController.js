const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getTodos = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();

    res.json(todos);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;

    const newTodo = await prisma.todo.create({
      data: {
        title,
        completed,
      },
    });

    res.json(newTodo);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const { id } = req.params;

    const todo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        completed,
      },
    });

    res.json(todo);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await prisma.todo.delete({
      where: {
        id,
      },
    });

    res.json(todo);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

exports.toggleTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await prisma.todo.findUnique({
      where: { id },
    });

    if (!todo) {
      res.status(404).json({ message: 'Todo not Found!' });
    }

    const newTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        completed: !todo?.completed,
      },
    });

    res.json(newTodo);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
