import { makeAutoObservable } from 'mobx';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

const deleteTodo = (todos: ITodo[], id: number): ITodo[] => todos.filter((todo) => todo.id !== id);

const addTodo = (todos: ITodo[], title: string): ITodo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    title,
    completed: false,
  },
];



class Todos {
  todos: ITodo[] = [];
  newTodoItem: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  deleteTodo(id: number) {
    this.todos = deleteTodo(this.todos, id);
  }

  addTodo() {
    if (this.newTodoItem) {
      this.todos = addTodo(this.todos, this.newTodoItem);
    }
    this.newTodoItem = '';
  }



}


export const store = new Todos();
