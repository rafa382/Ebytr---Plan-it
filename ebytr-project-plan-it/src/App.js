import './App.css';
import './style/headerStyle.css';
import './style/inputTaskStyle.css';
import './style/taskList.css';
import './style/addButtonStyle.css';
import MainPage from './pages/mainPage';
import React from 'react';
import TaskManager from './components/taskManager';

function App() {

  return (
    <div>
      <div className='header'>
      <h1 className='title'>Ebtr Plan It</h1>
      </div>
        <MainPage />
    </div>
  );
}

export default App;

