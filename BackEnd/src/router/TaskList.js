const router = require('react-router-dom');
const TaskListController = require('../controller/TaskList');

router.post('/', TaskListController.create);

module.exports = router;