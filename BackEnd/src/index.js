const router = require('./router/TaskList');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/taskList', router);

const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});