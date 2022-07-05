const TaskListModel = require('../models/TaskList');

const createTask = async (list) => {
  const taskList = await TaskListModel.create(list);
  return taskList;
}

module.exports = { 
  createTask
};
