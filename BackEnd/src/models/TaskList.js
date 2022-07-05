const connection = require('./connection');

const create = async (list) => connection.execute(
		'INSERT INTO task_manager.tasks(list) VALUES (?)',
    [list]
	);

module.exports = {
	create,
};