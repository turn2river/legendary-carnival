import { Header } from '../Header/index';
import { TodoList } from '../TodoList/index';

import { Wrapper } from './styled';


//render
export const App = () => {
  return (
    <Wrapper>
      <Header />
      <TodoList />
    </Wrapper>
  );
};
