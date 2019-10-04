const mongoose = require("mongoose");

// regular expression
// w - letters
// s - spaces
// 0-9 - numbers
// 1,100 - total length
// | - or
//

const Todo = mongoose.Schema({
  title: {
    type: String,
    validate: {
      validator: val => /^(\w|\s|[0-9]){1,100}$/.test(val),
      message: "Title must be 1-100 symbols length"
    }
  },
  listItems: [
    {
      todo: String
    }
  ]
});

module.exports = mongoose.model("Todo", Todo);
