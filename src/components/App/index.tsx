import { Header } from '../Header/index';
import { TodoList } from '../TodoList/index';

import { Wrapper } from './styled';

export const App = () => {
  return (
      <Wrapper>
        <Header />
        <TodoList />
      </Wrapper>
  );
};
