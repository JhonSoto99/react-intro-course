import './App.css';
import { TodoCounter } from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoList} from "./TodoList";

const defaultTodos = [
    {text: 'Cortar cebolla', completed: false},
    {text: 'Curso React', completed: true},
    {text: 'Llorar', completed: false},
    {text: 'Lalalal', completed: true},
]

function App() {
  return (
    <>
        <TodoCounter completed={16} total={10} />
        <TodoSearch />

        <TodoList>
            {defaultTodos.map(todo =>(
                <TodoItem
                    key={todo.text}
                    completed={todo.completed}
                    text={todo.text} />
            ))}
        </TodoList>

        <CreateTodoButton />

    </>
  );
}

export default App;
