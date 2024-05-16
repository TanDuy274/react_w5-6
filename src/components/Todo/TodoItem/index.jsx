import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

TodoItem.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoItem.defaultValue = {
  todoList: [],
  onTodoClick: null,
};

function TodoItem({ todoList, onTodoClick, onTodoDoubleClick }) {
  // const handleTodoClick = (todo, idx) => {
  //   onTodoClick(todo, idx);
  // };

  return (
    <ul>
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          onDoubleClick={() => onTodoDoubleClick(todo, idx)}
          onClick={() => onTodoClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoItem;
