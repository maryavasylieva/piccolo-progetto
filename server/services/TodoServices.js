const { Todo } = require("../models");

class TodosService {
  async create(todo) {
    try {
      let newTodo = await new Todo(todo);
      newTodo = await newTodo.save();

      return newTodo;
    } catch (err) {
      throw new Error(`Services error while creating todo: ${err}`);
    }
  }

  async get(id, page = 1, perPage = 1) {
    try {
      const searchParams = id ? { id } : {};
      const todos = await Todo.find(searchParams)
        .skip(perPage * (page - 1))
        .limit(5);
      // skip пропускает  skip*page = сколько страниц пропускаем   limit 5 записей на страницу
      return todos.length === 0 ? null : todos;
    } catch (err) {
      throw new Error(`Services error while getting products: ${err}`);
    }
  }

  async getOneByID(id, page = 1, perPage = 1) {
    try {
      const searchParams = id ? { _id: id } : {};
      const todos = await Todo.find(searchParams)
        .skip(perPage * (page - 1))
        .limit(5);
      // skip пропускает  skip*page = сколько страниц пропускаем   limit 5 записей на страницу
      return todos.length === 0 ? null : todos;
    } catch (err) {
      throw new Error(`Services error while getting todo: ${err}`);
    }
  }

  async update(id, todo) {
    try {
      return await Todo.findOneAndUpdate({ _id: id }, todo, { new: true });
    } catch (err) {
      throw new Error(`Services error while updating todo: ${err}`);
    }
  }

  async delete(id) {
    try {
      return await Todo.findByIdAndRemove({ _id: id });
    } catch (err) {
      throw new Error(`Services error while deleting todo: ${err}`);
    }
  }
}

module.exports = new TodosService();