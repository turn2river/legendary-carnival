import { ObservedTodoInput } from '../TodoInput';


import { Wrapper } from './styled';

//render
export const Header = () => {
  return (
    <Wrapper>
      <h1>ToDoApp</h1>
      <ObservedTodoInput />
      <span></span>
    </Wrapper>
  );
};


