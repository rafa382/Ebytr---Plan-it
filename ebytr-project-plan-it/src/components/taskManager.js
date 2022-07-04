import React, { useContext } from "react";

const TaskManager = () => {

const [inputTask, setInputTask] = React.useState('');

const [list, setList] = React.useState([]);

function handleInput(event) {
  const val = event.target.value;
  setInputTask(val);
}

function handleAddButton() {
  setList([...list, inputTask]);

  setInputTask('');
}

return (
  <div className="divPrincipal">
  <div className="divSecundaria">
    <div className="div-input-task">
        <form>
          <label htmlFor="input-task">
            <input
              className="inputTask"
              type="text"
              name="inputTask"
              value={ inputTask }
              placeholder="Adicione aqui uma nova tarefa"
              onChange={ handleInput }
            />
          </label>
        </form>
        <div className="divAddButton">
        <button
        className="addButton" 
        type="button"
        onClick={ handleAddButton }
        >
          Adicionar Tarefa
        </button>  
        </div>
      </div>
  <div className="divList">
        <ul className="taskList">
    { list.map((item) => (
        <li key={item.id}>{item}</li>
    ))}
    </ul>
        </div>
  </div>
  </div>
);
}

export default TaskManager;