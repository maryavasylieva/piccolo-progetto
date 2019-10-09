const { TaskServices, TodoServices } = require("../services");

class TaskController {
  async deleteTask(req, res, next) {
    try {
      const id = req.params.id;
      let todo = await TodoServices.getOneByID(id);
      todo.todos = todo.todos.filter(task => task.id !== req.query.task);
      if (!todo) {
        return res.status(404).json({ message: "Todo list wasnt found" });
      }
      todo = await TodoServices.update(id, todo);
      res.json(todo);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new TaskController();
