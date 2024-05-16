import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './Todo.css';
import TodoItem from './TodoItem';

Todo.propTypes = {};

let nextId = 3;
let mess = '';

function Todo(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'todo 1',
    },
    {
      id: 2,
      title: 'todo 2',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [value, setValue] = useState('');
  const [index, setIndex] = useState(-1);
  const [error, setError] = useState(false);

  const handleClick = (todo, idx) => {
    setValue(todoList[idx].title);
    setIndex(idx);
  };

  const handleDoubleClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList.splice(idx, 1);
    setTodoList(newTodoList);
    setIndex(-1);
    setValue('');
  };

  const changeTitle = (e) => {
    setValue(e.target.value);
  };

  const addTodo = (todoName) => {
    let flag = true;
    todoList.forEach((todo) => {
      if (todo.title === todoName) {
        setError(true);
        flag = false;
        mess = 'todo existed';
        return;
      }
    });
    if (flag) {
      setTodoList([...todoList, { id: nextId++, title: todoName }]);
      setError(false);
      mess = '';
    }
  };

  const changeNameTodo = (index, todoName) => {
    const newTodoList = [...todoList];
    newTodoList[index].title = todoName;
    setIndex(-1);
    setTodoList(newTodoList);
  };

  const handleButtonClick = (todoName) => {
    index === -1 ? addTodo(todoName) : changeNameTodo(index, todoName);
  };

  const schema = yup
    .object({
      todoName: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className='todo'>
      <form onSubmit={handleSubmit(({ todoName }) => (handleButtonClick(todoName), setValue('')))}>
        <TextField
          {...register('todoName')}
          error={errors.todoName || error}
          id='outlined-error-helper-text'
          label='What to do?'
          helperText={errors.todoName?.message || mess}
          fullWidth
          onChange={changeTitle}
          value={value}
          margin='normal'
        />
        <Button
          type='submit'
          variant='contained'
          fullWidth
          onClick={() => reset()}
        >
          Add
        </Button>
      </form>
      <TodoItem
        todoList={todoList}
        onTodoClick={handleClick}
        onTodoDoubleClick={handleDoubleClick}
      />
    </div>
  );
}

export default Todo;
