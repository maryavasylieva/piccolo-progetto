const { TodoServices } = require("../services");

class TodosController {
  async create(req, res) {
    try {
      const todo = req.body;
      const newTodo = await TodoServices.create(todo);
      return res.json({ todo: newTodo });
    } catch (err) {
      console.error("Controllers error while creating todo: ", err);
    }
  }

  async getAll(req, res) {
    try {
      const todos = await TodoServices.get();
      return res.json({ todos });
    } catch (err) {
      console.error("Controllers error while getting todos: ", err);
    }
  }

  async getByID(req, res) {
    try {
      const id = req.params.id;
      const todo = await TodoServices.getOneByID(id);

      if (!todo) {
        return res.status(404).json({ message: "Todo list not found" });
      }

      res.json({ data: todo });
    } catch (err) {
      throw new Error(`Controllers error while getting by ID todo: ${err}`);
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const todoToUpdate = req.body;
      let todo = await TodoServices.getOneByID(id);
      const updatedTodo = {
        title: todo.title,
        todos: [...todo.todos, todoToUpdate]
      };
      if (!todo) {
        return res.status(404).json({ message: "Todo list wasnt fount" });
      }

      todo = await TodoServices.update(id, updatedTodo);
      res.json(todo);
    } catch (err) {
      throw new Error(`Controllers error while updating todo: ${err}`);
    }
  }

  async patch(req, res) {
    try {
      const id = req.params.id;
      let todo = await TodoServices.getOneByID(id);
      const todoFromReq = req.body;
      const todoToPatch = { todos: [...todo.todos, todoFromReq.todos] };
      todo = await TodoServices.update(id, todoToPatch);
      res.json(todo);
      if (!todo) {
        return res.status(404).json({ message: "Todo list wasnt found" });
      }
    } catch (err) {
      throw new Error(`Controller error while patching todo: ${err}`);
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      let todo = await TodoServices.getOneByID(id);

      if (!todo) {
        return res.status(404).json({ message: "Todo list wasnt found" });
      }

      todo = await TodoServices.delete(id);
      res.json(todo);
    } catch (err) {
      throw new Error(`Controllers error while deleting todo: ${err}`);
    }
  }
}

module.exports = new TodosController();
