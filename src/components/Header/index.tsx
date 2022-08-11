import { ObservedTodoInput } from '../TodoInput';

import { Inner } from './styled';

export const Header = () => {
  return (
    <Inner>
      <h1>ToDoApp</h1>
      <ObservedTodoInput />
      <span></span>
    </Inner>
  );
};
