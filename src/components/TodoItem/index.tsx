import { observe } from 'mobx';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { store } from '../../store';

import { Wrapper } from './styled';

export const TodoItem = () => {
  return (
    <>
      {store.todos.map((todo) => (
        <Wrapper key={todo.id}>
          <label>
            <p>{todo.title}</p>
            <input 
            type='checkbox' 
            onClick={() => (todo.completed = !todo.completed)} 
            checked={todo.completed}
            />
            <span></span>
          </label>
          <button onClick={() => {
              store.deleteTodo(todo.id);
            }}/>
        </Wrapper>
      ))}
    </>
  );
};

export const ObservedTodoItem = observer(TodoItem);
