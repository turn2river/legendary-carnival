import { observer } from 'mobx-react';
import { store } from '../../store';

import { Wrapper } from './styled';

export const TodoInput = () => {
 
// const { addTodo } = store;
  return (
    <Wrapper>
      <input type='text' placeholder='What to do?..' value={store.newTodoItem} onChange={(e) => store.newTodoItem = e.target.value} />
      <button onClick={() => store.addTodo()} />
    </Wrapper>
  );
};

export const ObservedTodoInput = observer(TodoInput);
