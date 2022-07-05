const TaskListService = require('../service/TaskList');

const create = async (req, res) => {
  const { list } = req.body;
  const taskList = await TaskListService.createTask(list);
  res.status(201).json({ message: 'saved to-do list!'})
}

module.exports = {
  create
}