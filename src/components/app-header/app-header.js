import React from 'react';

import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <header className="header">
      <h1>My Todo List</h1>
      <p className="todo-info">{toDo} more to do, {done} done</p>
    </header>
  )
};

export default AppHeader;