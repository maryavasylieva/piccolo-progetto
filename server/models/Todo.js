const mongoose = require("mongoose");

// regular expression
// w - letters
// s - spaces
// 0-9 - numbers
// 1,100 - total length
// | - or
//

const Todo = mongoose.Schema({
  task: String
});

module.exports = mongoose.model("Todo", Todo);
